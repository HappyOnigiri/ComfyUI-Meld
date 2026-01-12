import { Box, Calendar, Search, Tag, Type, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";

interface Suggestion {
	type: string;
	value: string;
	count: number;
}

export const SearchBar: React.FC = () => {
	const { state, dispatch } = useGallery();
	const [inputValue, setInputValue] = useState(state.searchQuery);
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [searchSuggestions, setSearchSuggestions] = useState<
		{ type: string; value: string }[]
	>([]);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const inputRef = useRef<HTMLInputElement>(null);
	const suggestionsRef = useRef<HTMLDivElement>(null);

	const lastSearchedValueRef = useRef(state.searchQuery);

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
		if (state.searchQuery !== inputValue) {
			setInputValue(state.searchQuery);
		}
		lastSearchedValueRef.current = state.searchQuery;
	}, [state.searchQuery, inputValue]);

	// Auto-focus input on mount
	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	const handleSearch = useCallback(
		(query: string, shouldCloseSuggestions = true) => {
			if (lastSearchedValueRef.current === query) return;

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

			// Implement real-time search
			if (state.settings["search.realtime_search"]) {
				// Don't close suggestions if they are being shown
				handleSearch(inputValue, false);
			}

			if (!state.settings["search.input_suggest"]) {
				setSuggestions([]);
				setShowSuggestions(false);
				return;
			}

			const words = inputValue.split(/\s+/);
			const lastWord = words[words.length - 1];

			if (lastWord) {
				// Only show suggestions when one of the prefixes is used
				const match = lastWord.match(
					/^(pos|neg|model|date|after|before):(.*)$/i,
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
	}, [
		inputValue,
		state.settings["search.realtime_search"],
		state.settings["search.input_suggest"],
		handleSearch,
	]);

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

	const applySuggestion = (suggestion: Suggestion) => {
		const words = inputValue.split(/\s+/);
		words.pop(); // Remove the last partial word
		const isDate = ["date", "after", "before"].includes(suggestion.type);
		const valueWithQuotes = isDate ? suggestion.value : `"${suggestion.value}"`;
		const newQuery = `${[...words, `${suggestion.type}:${valueWithQuotes}`]
			.join(" ")
			.trim()} `;
		setInputValue(newQuery);
		handleSearch(newQuery);
		setSuggestions([]);
		setShowSuggestions(false);
		inputRef.current?.focus();
	};

	const clearSearch = () => {
		setInputValue("");
		handleSearch("");
	};

	const applySearchSuggestion = (type: string, value: string) => {
		const isDate = ["date", "after", "before"].includes(type);
		const valueWithQuotes = isDate ? value : `"${value}"`;
		const newQuery = `${type}:${valueWithQuotes}`;
		setInputValue(newQuery);
		handleSearch(newQuery);
	};

	const getIcon = (type: string) => {
		switch (type) {
			case "tag":
				return <Tag size={12} />;
			case "model":
				return <Box size={12} />;
			case "pos":
			case "neg":
				return <Type size={12} />;
			case "date":
			case "after":
			case "before":
				return <Calendar size={12} />;
			default:
				return null;
		}
	};

	return (
		<div
			className="meld-search-container"
			style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}
		>
			<div
				className="meld-search-bar-wrapper"
				style={{ position: "relative", width: "100%" }}
			>
				<div
					className="meld-search-bar"
					style={{
						display: "flex",
						alignItems: "center",
						backgroundColor: "#1a1a1a",
						borderRadius: "6px",
						padding: "6px 12px",
						border: "1px solid #333",
						transition: "border-color 0.2s",
						boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)",
					}}
				>
					<Search
						size={18}
						color="#666"
						style={{ marginRight: "10px", flexShrink: 0 }}
					/>
					<input
						ref={inputRef}
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={handleKeyDown}
						onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
						onFocus={() => {
							if (inputValue === lastSearchedValueRef.current) return;
							const words = inputValue.split(/\s+/);
							const lastWord = words[words.length - 1];
							if (lastWord?.match(/^(pos|neg|model|date|after|before):/i)) {
								setShowSuggestions(true);
							}
						}}
						placeholder="Search anything: prompts, tags, models, dates, or free keywords..."
						style={{
							flex: 1,
							background: "none",
							border: "none",
							color: "#fff",
							outline: "none",
							fontSize: "14px",
							padding: "4px 0",
						}}
					/>
					{inputValue && (
						<button
							type="button"
							onClick={clearSearch}
							style={{
								background: "none",
								border: "none",
								cursor: "pointer",
								padding: "2px",
								display: "flex",
								alignItems: "center",
								flexShrink: 0,
							}}
						>
							<X size={16} color="#666" />
						</button>
					)}
				</div>

				{showSuggestions && suggestions.length > 0 && (
					<div
						ref={suggestionsRef}
						className="meld-search-suggestions"
						style={{
							position: "absolute",
							top: "100%",
							left: 0,
							right: 0,
							backgroundColor: "#222",
							border: "1px solid #444",
							borderRadius: "0 0 6px 6px",
							zIndex: 1000,
							marginTop: "2px",
							maxHeight: "400px",
							overflowY: "auto",
							boxShadow: "0 8px 16px rgba(0,0,0,0.6)",
						}}
					>
						{suggestions.map((s, i) => (
							<div
								key={`${s.type}:${s.value}`}
								onMouseDown={(e) => {
									e.preventDefault(); // Prevent blur
									applySuggestion(s);
								}}
								onMouseEnter={() => setSelectedIndex(i)}
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									padding: "10px 14px",
									cursor: "pointer",
									backgroundColor: i === selectedIndex ? "#333" : "transparent",
									borderBottom: "1px solid #2a2a2a",
								}}
							>
								<div
									style={{ display: "flex", alignItems: "center", gap: "10px" }}
								>
									<span style={{ color: "#888", display: "flex" }}>
										{getIcon(s.type)}
									</span>
									<span
										style={{
											color: "#3b82f6",
											fontSize: "11px",
											fontWeight: "bold",
											textTransform: "uppercase",
											width: "45px",
										}}
									>
										{s.type}
									</span>
									<span style={{ color: "#eee", fontSize: "14px" }}>
										{s.value}
									</span>
								</div>
							</div>
						))}
					</div>
				)}
			</div>

			{!inputValue && !state.searchQuery && searchSuggestions.length > 0 && (
				<div
					className="meld-search-quick-suggestions"
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "8px",
						padding: "0 4px",
					}}
				>
					{searchSuggestions.map((s) => (
						<button
							key={`${s.type}:${s.value}`}
							type="button"
							onClick={() => applySearchSuggestion(s.type, s.value)}
							style={{
								display: "flex",
								alignItems: "center",
								gap: "6px",
								backgroundColor: "#2a2a2a",
								border: "1px solid #333",
								borderRadius: "16px",
								padding: "4px 12px",
								cursor: "pointer",
								transition: "all 0.2s",
								color: "#ccc",
								fontSize: "12px",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor = "#333";
								e.currentTarget.style.borderColor = "#444";
								e.currentTarget.style.color = "#fff";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = "#2a2a2a";
								e.currentTarget.style.borderColor = "#333";
								e.currentTarget.style.color = "#ccc";
							}}
						>
							<span style={{ display: "flex", color: "#888" }}>
								{getIcon(s.type)}
							</span>
							<span
								style={{
									color: "#3b82f6",
									fontWeight: "bold",
									textTransform: "uppercase",
									fontSize: "10px",
								}}
							>
								{s.type}
							</span>
							<span
								style={{
									maxWidth: "200px",
									overflow: "hidden",
									textOverflow: "ellipsis",
									whiteSpace: "nowrap",
								}}
							>
								{s.value}
							</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
};
