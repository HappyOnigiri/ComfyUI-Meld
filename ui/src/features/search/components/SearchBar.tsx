import { Search, Star, X } from "lucide-react";
import type React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import { useGallery } from "../../../store/GalleryContext";
import { stopReactKeyboardEvent } from "../../../utils/keyboard";
import { useFavoritesLogic } from "../hooks/useFavoritesLogic";
import { useSearchLogic } from "../hooks/useSearchLogic";
import { SearchSuggestions } from "./SearchSuggestions";

export const SearchBar: React.FC = () => {
	const { state } = useGallery();
	const {
		inputValue,
		setInputValue,
		suggestions,
		showSuggestions,
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
	} = useSearchLogic();
	const {
		isSaving,
		toastMessage,
		toastType,
		editingFavorite,
		setEditingFavorite,
		editFavoriteName,
		setEditFavoriteName,
		editFavoriteQuery,
		setEditFavoriteQuery,
		handleDeleteFavorite,
		handleEditFavorite,
		handleSaveEditFavorite,
		handleSaveFavorite: handleSaveFavoriteLogic,
		setToastMessage,
	} = useFavoritesLogic();

	const handleSaveFavorite = async () => {
		const isAlreadyFavorite = state.favorites.some(
			(f) => f.query === state.searchQuery,
		);
		if (isAlreadyFavorite) {
			setToastMessage("This query is already in your favorites.", "error");
			return;
		}
		await handleSaveFavoriteLogic();
	};

	useEscapeToClose({
		onEscape: () => setEditingFavorite(null),
		enabled: !!editingFavorite,
	});

	const editInputRef = useRef<HTMLInputElement>(null);
	const overlayMouseDownRef = useRef(false);

	useEffect(() => {
		if (editingFavorite && editInputRef.current) {
			editInputRef.current.focus();
		}
	}, [editingFavorite]);

	const handleOverlayMouseDown = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			overlayMouseDownRef.current = true;
		}
	};

	const handleOverlayMouseUp = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget && overlayMouseDownRef.current) {
			setEditingFavorite(null);
		}
		overlayMouseDownRef.current = false;
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
						className="meld-search-toast"
						style={{
							position: "absolute",
							top: "calc(100% + 8px)",
							left: "50%",
							transform: "translateX(-50%)",
							backgroundColor: "var(--comfy-menu-bg, #333)",
							color: "var(--meld-text-color)",
							padding: "8px 16px",
							borderRadius: "4px",
							fontSize: "12px",
							whiteSpace: "pre-wrap",
							textAlign: "center",
							boxShadow: "0 4px 12px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
							pointerEvents: "none",
							fontWeight: "bold",
							border:
								toastType === "error"
									? "1px solid var(--brand-red, #ff4c4c)"
									: "1px solid var(--comfy-menu-border, #444)",
							animation: "meld-fade-in-down 0.3s ease-out",
							width: "max-content",
							maxWidth: "300px",
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
					<button
						type="button"
						onClick={() => handleSearch(inputValue)}
						style={{
							background: isQueryChanged
								? "var(--meld-accent-color, #3b82f6)"
								: "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
							border: isQueryChanged
								? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))"
								: "1px solid transparent",
							cursor: "pointer",
							padding: "6px 10px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginRight: "10px",
							flexShrink: 0,
							borderRadius: "4px",
							transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
							boxShadow: isQueryChanged
								? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))"
								: "none",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = "translateY(-1px)";
							if (isQueryChanged) {
								e.currentTarget.style.filter = "brightness(1.15)";
								e.currentTarget.style.boxShadow =
									"0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))";
							} else {
								e.currentTarget.style.backgroundColor =
									"var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
							}
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = "none";
							if (isQueryChanged) {
								e.currentTarget.style.filter = "none";
								e.currentTarget.style.boxShadow =
									"0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))";
							} else {
								e.currentTarget.style.backgroundColor =
									"var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
							}
						}}
						onMouseDown={(e) => {
							e.currentTarget.style.transform = "translateY(1px)";
							e.currentTarget.style.boxShadow = "none";
						}}
						onMouseUp={(e) => {
							e.currentTarget.style.transform = "translateY(-1px)";
						}}
						title="Search (Enter)"
					>
						<Search
							size={16}
							color={
								isQueryChanged
									? "var(--meld-text-color, #fff)"
									: "var(--meld-text-secondary)"
							}
							style={{
								transition: "color 0.2s",
								filter: isQueryChanged
									? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))"
									: "none",
							}}
						/>
						{isQueryChanged && (
							<span
								style={{
									color: "var(--meld-text-color, #fff)",
									fontSize: "12px",
									fontWeight: "bold",
									marginLeft: "6px",
									textShadow:
										"0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2))",
								}}
							>
								Search
							</span>
						)}
					</button>
					<input
						ref={inputRef}
						type="text"
						value={inputValue}
						onChange={(e) => handleInputChange(e.target.value)}
						onKeyDown={handleKeyDown}
						onBlur={handleInputBlur}
						onFocus={handleInputFocus}
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

				<SearchSuggestions
					showSuggestions={showSuggestions}
					suggestions={suggestions}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
					applySuggestion={applySuggestion}
					inputValue={inputValue}
					searchQuery={state.searchQuery}
					searchSuggestions={searchSuggestions}
					allKeywords={allKeywords}
					showAllKeywords={showAllKeywords}
					toggleShowAllKeywords={toggleShowAllKeywords}
					applySearchSuggestion={applySearchSuggestion}
					favorites={state.favorites}
					onSelectFavorite={(query) => {
						setInputValue(query);
						handleSearch(query);
					}}
					onEditFavorite={handleEditFavorite}
					onDeleteFavorite={handleDeleteFavorite}
				/>
			</div>

			{editingFavorite &&
				createPortal(
					<div
						className="meld-modal-overlay meld-search-edit-modal-overlay"
						onMouseDown={handleOverlayMouseDown}
						onMouseUp={handleOverlayMouseUp}
					>
						<div
							className="meld-modal-content meld-modal-content--small"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="meld-modal-header">
								<h2
									style={{ display: "flex", alignItems: "center", gap: "10px" }}
								>
									<Star size={20} color="var(--meld-accent-color)" />
									Edit Favorite
								</h2>
								<button
									type="button"
									className="meld-modal-close"
									onClick={() => setEditingFavorite(null)}
								>
									<X size={20} />
								</button>
							</div>

							<div className="meld-modal-body">
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "16px",
										padding: "8px 0",
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											gap: "6px",
										}}
									>
										<label
											htmlFor="edit-favorite-name"
											style={{
												fontSize: "12px",
												fontWeight: "bold",
												color: "var(--meld-text-secondary)",
											}}
										>
											Name
										</label>
										<input
											id="edit-favorite-name"
											ref={editInputRef}
											type="text"
											value={editFavoriteName}
											onChange={(e) => setEditFavoriteName(e.target.value)}
											placeholder="Favorite Name"
											style={{
												backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
												border: "1px solid var(--comfy-menu-border, #333)",
												borderRadius: "4px",
												color: "var(--meld-text-color)",
												padding: "8px 12px",
												fontSize: "14px",
												outline: "none",
											}}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													stopReactKeyboardEvent(e);
													handleSaveEditFavorite();
												}
												if (e.key === "Escape") {
													stopReactKeyboardEvent(e);
													setEditingFavorite(null);
												}
											}}
										/>
									</div>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											gap: "6px",
										}}
									>
										<label
											htmlFor="edit-favorite-query"
											style={{
												fontSize: "12px",
												fontWeight: "bold",
												color: "var(--meld-text-secondary)",
											}}
										>
											Search Query
										</label>
										<textarea
											id="edit-favorite-query"
											value={editFavoriteQuery}
											onChange={(e) => setEditFavoriteQuery(e.target.value)}
											placeholder="Search Query"
											rows={3}
											style={{
												backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
												border: "1px solid var(--comfy-menu-border, #333)",
												borderRadius: "4px",
												color: "var(--meld-text-color)",
												padding: "8px 12px",
												fontSize: "13px",
												fontFamily: "monospace",
												outline: "none",
												resize: "vertical",
											}}
											onKeyDown={(e) => {
												if (e.key === "Enter" && !e.shiftKey) {
													stopReactKeyboardEvent(e);
													handleSaveEditFavorite();
												}
												if (e.key === "Escape") {
													stopReactKeyboardEvent(e);
													setEditingFavorite(null);
												}
											}}
										/>
									</div>
								</div>
							</div>

							<div className="meld-modal-footer">
								<button
									type="button"
									className="meld-btn meld-btn-secondary"
									onClick={() => setEditingFavorite(null)}
								>
									Cancel
								</button>
								<button
									type="button"
									className="meld-btn meld-btn-primary"
									onClick={handleSaveEditFavorite}
									disabled={
										isSaving ||
										!editFavoriteName.trim() ||
										!editFavoriteQuery.trim()
									}
								>
									{isSaving ? "Saving..." : "Save Changes"}
								</button>
							</div>
						</div>
					</div>,
					(document.fullscreenElement as HTMLElement) || document.body,
				)}
		</div>
	);
};
