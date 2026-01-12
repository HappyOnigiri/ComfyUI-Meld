import { Box, Search, Tag, Type, X } from "lucide-react";
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
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const inputRef = useRef<HTMLInputElement>(null);
	const suggestionsRef = useRef<HTMLDivElement>(null);

	// Synchronize inputValue with state.searchQuery if changed externally
	useEffect(() => {
		setInputValue(state.searchQuery);
	}, [state.searchQuery]);

	// Auto-focus input on mount
	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	const handleSearch = useCallback(
		(query: string) => {
			dispatch({ type: "SET_SEARCH_QUERY", payload: query });
			setShowSuggestions(false);
		},
		[dispatch],
	);

	useEffect(() => {
		const timer = setTimeout(async () => {
			if (inputValue.trim().length >= 1) {
				// Get the last word for suggestions
				const words = inputValue.split(/\s+/);
				const lastWord = words[words.length - 1];
				if (lastWord && !lastWord.includes(":") && !lastWord.startsWith('"')) {
					const results = await api.fetchSuggestions(lastWord);
					setSuggestions(results);
					setShowSuggestions(true);
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
	}, [inputValue]);

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
		const newQuery = `${[...words, `${suggestion.type}:"${suggestion.value}"`]
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

	const getIcon = (type: string) => {
		switch (type) {
			case "tag":
				return <Tag size={12} />;
			case "model":
				return <Box size={12} />;
			case "pos":
			case "neg":
				return <Type size={12} />;
			default:
				return null;
		}
	};

	// Parse query for chip visualization
	const tokens = inputValue.split(/\s+/).filter((t) => t.length > 0);

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
						onFocus={() =>
							inputValue.trim().length > 0 && setShowSuggestions(true)
						}
						placeholder="Search by tag:value, model:name, or keywords..."
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
								<span style={{ color: "#666", fontSize: "12px" }}>
									{s.count} images
								</span>
							</div>
						))}
					</div>
				)}
			</div>

			{tokens.length > 0 && (
				<div
					className="meld-search-chips"
					style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
				>
					{tokens.map((token, idx) => {
						const isPrefixed = token.includes(":");
						const isQuoted = token.startsWith('"') && token.endsWith('"');

						if (isPrefixed || isQuoted) {
							const [prefix] = token.split(":");

							return (
								<div
									key={idx}
									style={{
										display: "flex",
										alignItems: "center",
										gap: "4px",
										backgroundColor: "#1e3a5f",
										border: "1px solid #3b82f6",
										borderRadius: "4px",
										padding: "2px 8px",
										fontSize: "12px",
										color: "#dbeafe",
									}}
								>
									{isPrefixed && (
										<span style={{ opacity: 0.7 }}>{getIcon(prefix)}</span>
									)}
									<span>{token}</span>
									<X
										size={12}
										style={{ cursor: "pointer", marginLeft: "4px" }}
										onClick={() => {
											const newTokens = tokens.filter((_, i) => i !== idx);
											const newQuery = newTokens.join(" ");
											setInputValue(newQuery);
											handleSearch(newQuery);
										}}
									/>
								</div>
							);
						}
						return null;
					})}
				</div>
			)}
		</div>
	);
};
