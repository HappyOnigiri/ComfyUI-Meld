import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { logger } from "../../../logger";
import { useGallery } from "../../../store/GalleryContext";
import { stopReactKeyboardEvent } from "../../../utils/keyboard";
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

const getSearchTokens = (input: string) => {
	const tokens: string[] = [];
	let current = "";
	let inQuotes = false;
	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		if (char === '"') {
			inQuotes = !inQuotes;
			current += char;
		} else if (char === " " && !inQuotes) {
			tokens.push(current);
			current = "";
			// Skip extra spaces
			while (i + 1 < input.length && input[i + 1] === " ") {
				i++;
			}
		} else {
			current += char;
		}
	}
	tokens.push(current);
	return tokens;
};

export const useSearchLogic = () => {
	const { state, dispatch, updateSetting } = useGallery();
	const [inputValue, setInputValue] = useState(state.searchQuery);
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [searchSuggestions, setSearchSuggestions] = useState<{ type: string; value: string }[]>([]);
	const [allKeywords, setAllKeywords] = useState<{ type: string; value: string }[]>([]);
	const showAllKeywords = state.settings["search.show_all_keywords"];
	const [selectedIndex, setSelectedIndex] = useState<number>(-1);
	const [searchConfig, setSearchConfig] = useState<SearchConfig | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const lastSearchedValueRef = useRef(state.searchQuery);
	const isMountedRef = useRef(true);

	useEffect(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
		};
	}, []);

	const fetchKeywords = useCallback(async () => {
		if (allKeywords.length > 0) return;
		const result = await searchApi.fetchSearchKeywords();
		if (isMountedRef.current && result.ok) {
			setAllKeywords(result.data);
		}
	}, [allKeywords.length]);

	// Fetch search config on mount
	useEffect(() => {
		let isMounted = true;
		searchApi.fetchSearchConfig().then((result) => {
			if (isMounted && result.ok) setSearchConfig(result.data);
		});
		if (showAllKeywords) {
			fetchKeywords().catch((err) => {
				if (isMounted) logger.error("Failed to fetch keywords:", err);
			});
		}
		return () => {
			isMounted = false;
		};
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

		let isMounted = true;
		searchApi.fetchSearchSuggestions().then((result) => {
			if (isMounted) {
				if (result.ok) setSearchSuggestions(result.data);
				else setSearchSuggestions([]);
			}
		});
		return () => {
			isMounted = false;
		};
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

			const words = getSearchTokens(inputValue);
			const lastWord = words[words.length - 1];

			if (lastWord) {
				const match = lastWord.match(searchPrefixRegex);
				if (match) {
					const prefix = match[1];
					let subQuery = match[2];
					if (!prefix || subQuery === undefined) {
						setSuggestions([]);
						setShowSuggestions(false);
						return;
					}
					const normalizedPrefix = prefix.toLowerCase();

					if (subQuery.startsWith('"')) {
						subQuery = subQuery.substring(1);
					}
					if (subQuery.endsWith('"')) {
						subQuery = subQuery.substring(0, subQuery.length - 1);
					}

					const suggResult = await searchApi.fetchSuggestions(subQuery, normalizedPrefix);
					const results = suggResult.ok ? suggResult.data : [];
					setSuggestions(results);
					setShowSuggestions(results.length > 0);
					setSelectedIndex(-1);
				} else {
					// Check if it's a partial prefix (e.g., "p" -> "pos:")
					const cleanWord = lastWord.replace(/^([-!])/, "").toLowerCase();
					if (cleanWord && searchConfig) {
						const prefixMatches = searchConfig.all_prefixes
							.filter((p) => p.startsWith(cleanWord))
							.map((p) => ({
								type: p,
								value: "",
								count: 0,
							}));

						if (prefixMatches.length > 0) {
							setSuggestions(prefixMatches);
							setShowSuggestions(true);
							setSelectedIndex(-1);
							return;
						}
					}
					setSuggestions([]);
					setShowSuggestions(false);
				}
			} else {
				setSuggestions([]);
				setShowSuggestions(false);
			}
		}, 300);

		return () => clearTimeout(timer);
	}, [inputValue, state.settings["search.input_suggest"], searchPrefixRegex, searchConfig]);

	const applySuggestion = useCallback(
		(suggestion: Suggestion) => {
			if (!suggestion) return;
			const words = getSearchTokens(inputValue);
			const lastWord = words.pop() || ""; // Remove the last partial word
			const negationMatch = lastWord.match(/^([-!])/);
			const negationPrefix = negationMatch ? negationMatch[1] : "";

			const noQuoteTypes = searchConfig?.no_quote_prefixes || [];
			const isNoQuote = noQuoteTypes.includes(suggestion.type);

			// If value is empty, it means we're suggesting the prefix itself
			if (suggestion.value === "") {
				const newQuery = `${[...words, `${negationPrefix}${suggestion.type}:`].join(" ").trim()}`;
				setInputValue(newQuery);
				// Don't clear suggestions yet, because now we might want to see suggestions for this prefix
			} else {
				const valueWithQuotes = isNoQuote ? suggestion.value : `"${suggestion.value}"`;
				const newQuery = `${[...words, `${negationPrefix}${suggestion.type}:${valueWithQuotes}`]
					.join(" ")
					.trim()} `;
				setInputValue(newQuery);
				setSuggestions([]);
				setShowSuggestions(false);
			}
			inputRef.current?.focus();
		},
		[inputValue, searchConfig],
	);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (!e) return;
		if (e.key === "Enter") {
			stopReactKeyboardEvent(e);
			if (showSuggestions && selectedIndex >= 0) {
				const selectedSuggestion = suggestions[selectedIndex];
				if (selectedSuggestion) {
					applySuggestion(selectedSuggestion);
				}
			} else {
				handleSearch(inputValue);
			}
		} else if (e.key === "Tab") {
			if (showSuggestions && suggestions.length > 0) {
				stopReactKeyboardEvent(e);
				const indexToApply = selectedIndex >= 0 ? selectedIndex : 0;
				const selectedSuggestion = suggestions[indexToApply];
				if (selectedSuggestion) {
					applySuggestion(selectedSuggestion);
				}
			}
		} else if (e.key === "ArrowDown") {
			if (showSuggestions) {
				stopReactKeyboardEvent(e);
				setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
			}
		} else if (e.key === "ArrowUp") {
			if (showSuggestions) {
				stopReactKeyboardEvent(e);
				setSelectedIndex((prev) => Math.max(prev - 1, -1));
			}
		} else if (e.key === "Escape") {
			stopReactKeyboardEvent(e);
			setShowSuggestions(false);
		}
	};

	const clearSearch = useCallback(() => {
		setInputValue("");
		handleSearch("");
	}, [handleSearch]);

	const applySearchSuggestion = useCallback(
		(type: string, value: string, onlyPrefix = false) => {
			if (!type) return;
			const words = getSearchTokens(inputValue);
			const lastWord = words[words.length - 1] || "";

			let shouldReplaceLast = false;
			const cleanLastWord = lastWord.replace(/^([-!])/, "").toLowerCase();
			if (cleanLastWord && type.toLowerCase().startsWith(cleanLastWord)) {
				shouldReplaceLast = true;
			}

			const negationMatch = lastWord.match(/^([-!])/);
			const negationPrefix = shouldReplaceLast && negationMatch ? negationMatch[1] : "";

			if (shouldReplaceLast) {
				words.pop();
			}

			if (onlyPrefix) {
				const newQuery = [...words, `${negationPrefix}${type}:`].filter(Boolean).join(" ");
				setInputValue(newQuery);
				inputRef.current?.focus();
				return;
			}

			const noQuoteTypes = searchConfig?.no_quote_prefixes || [];
			const isNoQuote = noQuoteTypes.includes(type);
			const valueWithQuotes = isNoQuote ? value : `"${value}"`;
			const term = `${negationPrefix}${type}:${valueWithQuotes}`;

			const newQuery = [...words, term].filter(Boolean).join(" ");
			setInputValue(newQuery);
			handleSearch(newQuery);
		},
		[inputValue, handleSearch, searchConfig],
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
		if (inputValue === lastSearchedValueRef.current || !searchPrefixRegex) return;
		const words = getSearchTokens(inputValue);
		const lastWord = words[words.length - 1];
		if (!lastWord) return;

		const isFullPrefix = !!lastWord.match(searchPrefixRegex);
		const cleanWord = lastWord.replace(/^([-!])/, "").toLowerCase();
		const isPartialPrefix =
			cleanWord && searchConfig?.all_prefixes.some((p) => p.startsWith(cleanWord));

		if (isFullPrefix || isPartialPrefix) {
			setShowSuggestions(true);
		}
	}, [inputValue, searchPrefixRegex, searchConfig]);

	const blurTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleInputBlur = useCallback(() => {
		blurTimeoutRef.current = setTimeout(() => setShowSuggestions(false), 200);
	}, []);

	useEffect(() => {
		return () => {
			if (blurTimeoutRef.current) {
				clearTimeout(blurTimeoutRef.current);
			}
		};
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
