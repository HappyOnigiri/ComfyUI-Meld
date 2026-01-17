import { useCallback, useEffect, useRef, useState } from "react";
import * as api from "../api";
import { logger } from "../logger";
import { useGallery } from "../store/GalleryContext";

export interface Suggestion {
	type: string;
	value: string;
	count: number;
}

export const useSearchLogic = () => {
	const { state, dispatch } = useGallery();
	const [inputValue, setInputValue] = useState(state.searchQuery);
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [searchSuggestions, setSearchSuggestions] = useState<
		{ type: string; value: string }[]
	>([]);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const inputRef = useRef<HTMLInputElement>(null);
	const lastSearchedValueRef = useRef(state.searchQuery);

	const isQueryChanged = inputValue !== lastSearchedValueRef.current;

	// Fetch quick search suggestions on mount or when search is cleared
	useEffect(() => {
		if (!state.settings["search.quick_suggestions"]) {
			setSearchSuggestions([]);
			return;
		}

		if (!inputValue && !state.searchQuery) {
			api.fetchSearchSuggestions().then((results) => {
				setSearchSuggestions(results);
			});
		} else {
			setSearchSuggestions([]);
		}
	}, [
		inputValue,
		state.searchQuery,
		state.settings["search.quick_suggestions"],
	]);

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

			if (!state.settings["search.input_suggest"]) {
				setSuggestions([]);
				setShowSuggestions(false);
				return;
			}

			const words = inputValue.split(/\s+/);
			const lastWord = words[words.length - 1];

			if (lastWord) {
				const match = lastWord.match(
					/^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):(.*)$/i,
				);
				if (match) {
					const prefix = match[1].toLowerCase();
					const subQuery = match[2];

					const results = await api.fetchSuggestions(subQuery, prefix);
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
	}, [inputValue, state.settings["search.input_suggest"]]);

	const applySuggestion = useCallback(
		(suggestion: Suggestion) => {
			const words = inputValue.split(/\s+/);
			const lastWord = words.pop() || ""; // Remove the last partial word
			const negationMatch = lastWord.match(/^([-!])/);
			const negationPrefix = negationMatch ? negationMatch[1] : "";

			const noQuoteTypes = [
				"date",
				"after",
				"before",
				"has_source",
				"has_derivatives",
			];
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
		[inputValue],
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
		(type: string, value: string) => {
			const noQuoteTypes = [
				"date",
				"after",
				"before",
				"has_source",
				"has_derivatives",
			];
			const isNoQuote = noQuoteTypes.includes(type);
			const valueWithQuotes = isNoQuote ? value : `"${value}"`;
			const newQuery = `${type}:${valueWithQuotes}`;
			setInputValue(newQuery);
			handleSearch(newQuery);
		},
		[handleSearch],
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
		if (inputValue === lastSearchedValueRef.current) return;
		const words = inputValue.split(/\s+/);
		const lastWord = words[words.length - 1];
		if (
			lastWord?.match(
				/^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):/i,
			)
		) {
			setShowSuggestions(true);
		}
	}, [inputValue]);

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
