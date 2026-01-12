import {
	Box,
	Calendar,
	Edit2,
	Search,
	Star,
	Tag,
	Trash2,
	Type,
	X,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import * as api from "../api";
import { logger } from "../logger";
import { useGallery } from "../store/GalleryContext";

interface Suggestion {
	type: string;
	value: string;
	count: number;
}

export const SearchBar: React.FC = () => {
	const { state, dispatch, refreshFavorites } = useGallery();
	const [inputValue, setInputValue] = useState(state.searchQuery);
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [searchSuggestions, setSearchSuggestions] = useState<
		{ type: string; value: string }[]
	>([]);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [isSaving, setIsSaving] = useState(false);
	const [toastMessage, setToastMessage] = useState<string | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	// Clear toast after 3 seconds
	useEffect(() => {
		if (toastMessage) {
			const timer = setTimeout(() => setToastMessage(null), 3000);
			return () => clearTimeout(timer);
		}
	}, [toastMessage]);
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

	const handleDeleteFavorite = async (
		e: React.MouseEvent,
		id: number,
		name: string,
	) => {
		e.stopPropagation();

		const confirmMsg = `Are you sure you want to delete the favorite "${name}"?`;
		if (!window.confirm(confirmMsg)) return;

		try {
			await api.deleteFavorite(id);
			await refreshFavorites();
		} catch (err) {
			logger.error("Failed to delete favorite", err);
		}
	};

	const handleRenameFavorite = async (
		e: React.MouseEvent,
		id: number,
		currentName: string,
	) => {
		e.stopPropagation();

		const newName = window.prompt(
			"Enter a new name for this favorite:",
			currentName,
		);
		if (newName === null || newName === currentName) return;

		try {
			await api.updateFavorite(id, newName || currentName);
			await refreshFavorites();
		} catch (err) {
			logger.error("Failed to rename favorite", err);
		}
	};

	const applySearchSuggestion = (type: string, value: string) => {
		const isDate = ["date", "after", "before"].includes(type);
		const valueWithQuotes = isDate ? value : `"${value}"`;
		const newQuery = `${type}:${valueWithQuotes}`;
		setInputValue(newQuery);
		handleSearch(newQuery);
	};

	const handleSaveFavorite = async () => {
		if (!state.searchQuery || isSaving) return;

		// If already in favorites, we might want to toggle it (delete)?
		const isAlreadyFavorite = state.favorites.some(
			(f) => f.query === state.searchQuery,
		);
		if (isAlreadyFavorite) {
			const fav = state.favorites.find((f) => f.query === state.searchQuery);
			if (fav) {
				setIsSaving(true);
				try {
					await api.deleteFavorite(fav.id);
					await refreshFavorites();
					setToastMessage("Favorite removed.");
				} catch (err) {
					console.error("Failed to delete favorite:", err);
				} finally {
					setIsSaving(false);
				}
			}
			return;
		}

		setIsSaving(true);
		try {
			await api.saveFavorite(state.searchQuery, state.searchQuery);
			await refreshFavorites();
			setToastMessage(
				"Favorite added! You can select favorites when the search query is empty.",
			);
		} catch (err) {
			console.error("Failed to save favorite:", err);
		} finally {
			setIsSaving(false);
		}
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
				{toastMessage && (
					<div
						style={{
							position: "absolute",
							top: "-45px",
							left: "50%",
							transform: "translateX(-50%)",
							backgroundColor: "var(--comfy-menu-bg, #333)",
							color: "var(--meld-text-color)",
							padding: "8px 16px",
							borderRadius: "4px",
							fontSize: "12px",
							zIndex: 1000,
							whiteSpace: "nowrap",
							boxShadow: "0 4px 12px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
							pointerEvents: "none",
							fontWeight: "bold",
							border: "1px solid var(--comfy-menu-border, #444)",
							animation: "meld-fade-in 0.3s ease-out",
						}}
					>
						{toastMessage}
					</div>
				)}
				<div
					className="meld-search-bar"
					style={{
						display: "flex",
						alignItems: "center",
						backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
						borderRadius: "6px",
						padding: "6px 12px",
						border: "1px solid var(--comfy-menu-border, #333)",
						transition: "border-color 0.2s",
						boxShadow:
							"inset 0 1px 3px var(--comfy-input-shadow, rgba(0,0,0,0.2))",
					}}
				>
					<Search
						size={18}
						color="var(--meld-text-secondary)"
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
							color: "var(--meld-text-color)",
							outline: "none",
							fontSize: "14px",
							padding: "4px 0",
						}}
					/>
					{state.searchQuery && (
						<button
							type="button"
							onClick={handleSaveFavorite}
							disabled={isSaving}
							title={
								state.favorites.some((f) => f.query === state.searchQuery)
									? "Remove from Favorites"
									: "Add to Favorites"
							}
							style={{
								background: "none",
								border: "none",
								cursor: "pointer",
								padding: "2px",
								display: "flex",
								alignItems: "center",
								flexShrink: 0,
								marginRight: "4px",
							}}
						>
							<Star
								size={16}
								color={
									state.favorites.some((f) => f.query === state.searchQuery)
										? "var(--brand-yellow, #ffd700)"
										: "var(--meld-text-secondary)"
								}
								fill={
									state.favorites.some((f) => f.query === state.searchQuery)
										? "var(--brand-yellow, #ffd700)"
										: "none"
								}
							/>
						</button>
					)}
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
							<X size={16} color="var(--meld-text-secondary)" />
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
							backgroundColor: "var(--comfy-menu-bg, #222)",
							border: "1px solid var(--comfy-menu-border, #444)",
							borderRadius: "0 0 6px 6px",
							zIndex: 1000,
							marginTop: "2px",
							maxHeight: "400px",
							overflowY: "auto",
							boxShadow: "0 8px 16px var(--comfy-menu-shadow, rgba(0,0,0,0.6))",
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
									backgroundColor:
										i === selectedIndex
											? "var(--comfy-menu-bg, #333)"
											: "transparent",
									borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)",
								}}
							>
								<div
									style={{ display: "flex", alignItems: "center", gap: "10px" }}
								>
									<span
										style={{
											color: "var(--meld-text-secondary)",
											display: "flex",
										}}
									>
										{getIcon(s.type)}
									</span>
									<span
										style={{
											color: "var(--comfy-input-text-active, #3b82f6)",
											fontSize: "11px",
											fontWeight: "bold",
											textTransform: "uppercase",
											width: "45px",
										}}
									>
										{s.type}
									</span>
									<span
										style={{
											color: "var(--meld-text-color)",
											fontSize: "14px",
										}}
									>
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
								backgroundColor: "var(--comfy-input-bg, #2a2a2a)",
								border: "1px solid var(--comfy-menu-border, #333)",
								borderRadius: "16px",
								padding: "4px 12px",
								cursor: "pointer",
								transition: "all 0.2s",
								color: "var(--meld-text-color)",
								fontSize: "12px",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor =
									"var(--comfy-menu-bg, #333)";
								e.currentTarget.style.borderColor =
									"var(--comfy-menu-border, #444)";
								e.currentTarget.style.color = "var(--meld-text-color)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor =
									"var(--comfy-input-bg, #2a2a2a)";
								e.currentTarget.style.borderColor =
									"var(--comfy-menu-border, #333)";
								e.currentTarget.style.color = "var(--meld-text-color)";
							}}
						>
							<span
								style={{
									display: "flex",
									color: "var(--meld-text-secondary)",
								}}
							>
								{getIcon(s.type)}
							</span>
							<span
								style={{
									color: "var(--comfy-input-text-active, #3b82f6)",
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

			{!inputValue && state.favorites.length > 0 && (
				<div
					className="meld-search-favorites"
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "8px",
						padding: "4px",
						marginTop: "4px",
						borderTop: "1px solid var(--comfy-menu-border, #333)",
						paddingTop: "12px",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "6px",
							color: "var(--meld-text-secondary)",
							fontSize: "11px",
							fontWeight: "bold",
							textTransform: "uppercase",
							paddingLeft: "4px",
							marginBottom: "4px",
						}}
					>
						<Star size={12} fill="var(--meld-text-secondary)" />
						Favorites
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "4px",
						}}
					>
						{state.favorites.map((fav) => (
							<div
								key={fav.id}
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									backgroundColor: "var(--comfy-input-bg, #2a2a2a)",
									border: "1px solid var(--comfy-menu-border, #333)",
									borderRadius: "6px",
									padding: "8px 12px",
									cursor: "pointer",
									transition: "all 0.2s",
									color: "var(--meld-text-color)",
									fontSize: "13px",
									gap: "10px",
								}}
								onClick={() => {
									setInputValue(fav.query);
									handleSearch(fav.query);
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor =
										"var(--comfy-menu-bg, #333)";
									e.currentTarget.style.borderColor =
										"var(--meld-accent-color)";
									e.currentTarget.style.color = "var(--meld-text-color)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor =
										"var(--comfy-input-bg, #2a2a2a)";
									e.currentTarget.style.borderColor =
										"var(--comfy-menu-border, #333)";
									e.currentTarget.style.color = "var(--meld-text-color)";
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										minWidth: 0,
										flex: 1,
									}}
								>
									<span
										style={{
											fontWeight: "bold",
											overflow: "hidden",
											textOverflow: "ellipsis",
											whiteSpace: "nowrap",
										}}
									>
										{fav.name}
									</span>
									{fav.name !== fav.query && (
										<span
											style={{
												fontSize: "10px",
												color: "var(--meld-text-secondary)",
												overflow: "hidden",
												textOverflow: "ellipsis",
												whiteSpace: "nowrap",
												fontFamily: "monospace",
											}}
										>
											{fav.query}
										</span>
									)}
								</div>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "4px",
										flexShrink: 0,
									}}
								>
									<button
										type="button"
										onClick={(e) => {
											e.stopPropagation();
											handleRenameFavorite(e, fav.id, fav.name);
										}}
										style={{
											background: "none",
											border: "none",
											color: "var(--meld-text-secondary)",
											padding: "6px",
											display: "flex",
											alignItems: "center",
											cursor: "pointer",
											borderRadius: "4px",
											transition: "all 0.2s",
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.color = "var(--meld-accent-color)";
											e.currentTarget.style.backgroundColor =
												"var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.color =
												"var(--meld-text-secondary)";
											e.currentTarget.style.backgroundColor = "transparent";
										}}
										title="Rename favorite"
									>
										<Edit2 size={14} />
									</button>
									<button
										type="button"
										onClick={(e) => {
											e.stopPropagation();
											handleDeleteFavorite(e, fav.id, fav.name);
										}}
										style={{
											background: "none",
											border: "none",
											color: "var(--meld-text-secondary)",
											padding: "6px",
											display: "flex",
											alignItems: "center",
											cursor: "pointer",
											borderRadius: "4px",
											transition: "all 0.2s",
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.color = "var(--meld-danger-color)";
											e.currentTarget.style.backgroundColor =
												"var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.color =
												"var(--meld-text-secondary)";
											e.currentTarget.style.backgroundColor = "transparent";
										}}
										title="Delete favorite"
									>
										<Trash2 size={14} />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
