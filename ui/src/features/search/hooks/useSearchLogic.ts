import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { logger } from "../../../logger";
import { useGallery } from "../../../store/GalleryContext";
import * as searchApi from "../api/searchApi";

export interface Suggestion {
	type: string;
	value: string;
	count: number;
}

export interface SearchConfig {
	all_prefixes: string[];
	boolean_prefixes: string[];
	date_prefixes: string[];
	sort_prefix: string;
	no_quote_prefixes: string[];
}

export const useSearchLogic = () => {
	const { state, dispatch, updateSetting } = useGallery();
	const [inputValue, setInputValue] = useState(state.searchQuery);
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [searchSuggestions, setSearchSuggestions] = useState<
		{ type: string; value: string }[]
	>([]);
	const [allKeywords, setAllKeywords] = useState<
		{ type: string; value: string }[]
	>([]);
	const showAllKeywords = state.settings["search.show_all_keywords"];
	const [selectedIndex, setSelectedIndex] = useState<number>(-1);
	const [searchConfig, setSearchConfig] = useState<SearchConfig | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const lastSearchedValueRef = useRef(state.searchQuery);

	const fetchKeywords = useCallback(async () => {
		if (allKeywords.length > 0) return;
		const results = await searchApi.fetchSearchKeywords();
		setAllKeywords(results);
	}, [allKeywords.length]);

	// Fetch search config on mount
	useEffect(() => {
		searchApi.fetchSearchConfig().then((config) => {
			setSearchConfig(config);
		});
		// Fetch keywords if showAllKeywords is true
		if (showAllKeywords) {
			fetchKeywords();
		}
	}, [fetchKeywords, showAllKeywords]);

	const searchPrefixRegex = useMemo(() => {
		if (!searchConfig) return null;
		const prefixes = searchConfig.all_prefixes.join("|");
		return new RegExp(`^[-!]?(${prefixes}):(.*)$`, "i");
	}, [searchConfig]);

	const toggleShowAllKeywords = useCallback(() => {
		const newValue = !showAllKeywords;
		if (newValue) {
			fetchKeywords();
		}
		updateSetting("search.show_all_keywords", newValue);
	}, [showAllKeywords, fetchKeywords, updateSetting]);

	const isQueryChanged = inputValue !== lastSearchedValueRef.current;

	// Fetch quick search suggestions on mount
	useEffect(() => {
		if (!state.settings["search.quick_suggestions"]) {
			setSearchSuggestions([]);
			return;
		}

		searchApi.fetchSearchSuggestions().then((results) => {
			setSearchSuggestions(results);
		});
	}, [state.settings["search.quick_suggestions"]]);

	// Synchronize inputValue with state.searchQuery if changed externally
	useEffect(() => {
		setInputValue(state.searchQuery);
		lastSearchedValueRef.current = state.searchQuery;
	}, [state.searchQuery]);

	// Auto-focus input on mount
	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	const handleSearch = useCallback(
		(query: string, shouldCloseSuggestions = true) => {
			if (lastSearchedValueRef.current === query) return;

			logger.log("SearchBar: triggering search", { query });
			dispatch({ type: "SET_SEARCH_QUERY", payload: query });
			if (shouldCloseSuggestions) {
				setShowSuggestions(false);
			}
			lastSearchedValueRef.current = query;
		},
		[dispatch],
	);

	useEffect(() => {
		const timer = setTimeout(async () => {
			if (inputValue === lastSearchedValueRef.current) {
				return;
			}

			if (!state.settings["search.input_suggest"] || !searchPrefixRegex) {
				setSuggestions([]);
				setShowSuggestions(false);
				return;
			}

			const words = inputValue.split(/\s+/);
			const lastWord = words[words.length - 1];

			if (lastWord) {
				const match = lastWord.match(searchPrefixRegex);
				if (match) {
					const prefix = match[1].toLowerCase();
					const subQuery = match[2];

					const results = await searchApi.fetchSuggestions(subQuery, prefix);
					setSuggestions(results);
					setShowSuggestions(results.length > 0);
					setSelectedIndex(-1);
				} else {
					setSuggestions([]);
					setShowSuggestions(false);
				}
			} else {
				setSuggestions([]);
				setShowSuggestions(false);
			}
		}, 300);

		return () => clearTimeout(timer);
	}, [inputValue, state.settings["search.input_suggest"], searchPrefixRegex]);

	const applySuggestion = useCallback(
		(suggestion: Suggestion) => {
			const words = inputValue.split(/\s+/);
			const lastWord = words.pop() || ""; // Remove the last partial word
			const negationMatch = lastWord.match(/^([-!])/);
			const negationPrefix = negationMatch ? negationMatch[1] : "";

			const noQuoteTypes = searchConfig?.no_quote_prefixes || [];
			const isNoQuote = noQuoteTypes.includes(suggestion.type);
			const valueWithQuotes = isNoQuote
				? suggestion.value
				: `"${suggestion.value}"`;
			const newQuery = `${[
				...words,
				`${negationPrefix}${suggestion.type}:${valueWithQuotes}`,
			]
				.join(" ")
				.trim()} `;
			setInputValue(newQuery);
			setSuggestions([]);
			setShowSuggestions(false);
			inputRef.current?.focus();
		},
		[inputValue, searchConfig],
	);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleSearch(inputValue);
		} else if (e.key === "Tab") {
			if (showSuggestions && selectedIndex >= 0) {
				applySuggestion(suggestions[selectedIndex]);
				e.preventDefault();
			}
		} else if (e.key === "ArrowDown") {
			if (showSuggestions) {
				setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
				e.preventDefault();
			}
		} else if (e.key === "ArrowUp") {
			if (showSuggestions) {
				setSelectedIndex((prev) => Math.max(prev - 1, -1));
				e.preventDefault();
			}
		} else if (e.key === "Escape") {
			setShowSuggestions(false);
		}
	};

	const clearSearch = useCallback(() => {
		setInputValue("");
		handleSearch("");
	}, [handleSearch]);

	const applySearchSuggestion = useCallback(
		(type: string, value: string, onlyPrefix = false) => {
			if (onlyPrefix) {
				const newQuery = `${type}:`;
				setInputValue(newQuery);
				inputRef.current?.focus();
				return;
			}
			const noQuoteTypes = searchConfig?.no_quote_prefixes || [];
			const isNoQuote = noQuoteTypes.includes(type);
			const valueWithQuotes = isNoQuote ? value : `"${value}"`;
			const newQuery = `${type}:${valueWithQuotes}`;
			setInputValue(newQuery);
			handleSearch(newQuery);
		},
		[handleSearch, searchConfig],
	);

	const handleInputChange = useCallback(
		(val: string) => {
			setInputValue(val);
			if (!val) {
				handleSearch("");
			}
		},
		[handleSearch],
	);

	const handleInputFocus = useCallback(() => {
		if (inputValue === lastSearchedValueRef.current || !searchPrefixRegex)
			return;
		const words = inputValue.split(/\s+/);
		const lastWord = words[words.length - 1];
		if (lastWord?.match(searchPrefixRegex)) {
			setShowSuggestions(true);
		}
	}, [inputValue, searchPrefixRegex]);

	const handleInputBlur = useCallback(() => {
		setTimeout(() => setShowSuggestions(false), 200);
	}, []);

	return {
		inputValue,
		setInputValue,
		suggestions,
		showSuggestions,
		setShowSuggestions,
		searchSuggestions,
		allKeywords,
		showAllKeywords,
		toggleShowAllKeywords,
		selectedIndex,
		setSelectedIndex,
		inputRef,
		isQueryChanged,
		handleSearch,
		handleKeyDown,
		applySuggestion,
		clearSearch,
		applySearchSuggestion,
		handleInputChange,
		handleInputFocus,
		handleInputBlur,
	};
};
