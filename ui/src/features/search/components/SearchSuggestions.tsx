import {
	ArrowDown,
	ArrowUp,
	ArrowUpDown,
	Box,
	Calendar,
	Star,
	Tag,
	Type,
} from "lucide-react";
import type React from "react";
import { RESERVED_TAG_KEYWORD } from "../../../constants";
import type { Favorite } from "../../../types";
import type { Suggestion } from "../hooks/useSearchLogic";
import { FavoriteItem } from "./FavoriteItem";

export interface SearchSuggestionsProps {
	showSuggestions: boolean;
	suggestions: Suggestion[];
	selectedIndex: number;
	setSelectedIndex: (index: number | ((prev: number) => number)) => void;
	applySuggestion: (s: Suggestion) => void;
	inputValue: string;
	searchQuery: string;
	searchSuggestions: { type: string; value: string }[];
	allKeywords: { type: string; value: string }[];
	showAllKeywords: boolean;
	toggleShowAllKeywords: () => void;
	applySearchSuggestion: (
		type: string,
		value: string,
		onlyPrefix?: boolean,
	) => void;
	favorites: Favorite[];
	onSelectFavorite: (query: string) => void;
	onEditFavorite: (e: React.MouseEvent, fav: Favorite) => void;
	onDeleteFavorite: (
		e: React.MouseEvent,
		id: number,
		name: string,
	) => void | Promise<void>;
}

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
		case "has_source":
			return <ArrowUp size={12} />;
		case "has_derivatives":
			return <ArrowDown size={12} />;
		case "sort":
			return <ArrowUpDown size={12} />;
		default:
			return null;
	}
};

export const SearchSuggestions = ({
	showSuggestions,
	suggestions,
	selectedIndex,
	setSelectedIndex,
	applySuggestion,
	inputValue,
	searchQuery,
	searchSuggestions,
	allKeywords,
	showAllKeywords,
	toggleShowAllKeywords,
	applySearchSuggestion,
	favorites,
	onSelectFavorite,
	onEditFavorite,
	onDeleteFavorite,
}: SearchSuggestionsProps) => {
	const renderKeywordButton = (
		s: { type: string; value: string },
		idx: number,
		keyPrefix: string,
	) => (
		<button
			key={`${keyPrefix}-${s.type}:${s.value}:${idx}`}
			type="button"
			onClick={() =>
				applySearchSuggestion(s.type, s.value, keyPrefix === "all")
			}
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
				e.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)";
				e.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)";
				e.currentTarget.style.color = "var(--meld-text-color)";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.backgroundColor =
					"var(--comfy-input-bg, #2a2a2a)";
				e.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)";
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
			{keyPrefix !== "all" && (
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
			)}
		</button>
	);

	const renderSearchSuggestions = () => {
		if (!showSuggestions || suggestions.length === 0) return null;

		return (
			<div
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
					marginTop: "8px",
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
						<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
									fontSize: "10px",
									fontWeight: "bold",
									textTransform: "uppercase",
									width: s.type.length > 8 ? "auto" : "60px",
									flexShrink: 0,
								}}
							>
								{s.type}:
							</span>
							<span
								style={{
									color:
										s.value === RESERVED_TAG_KEYWORD
											? "var(--meld-accent-color, #3b82f6)"
											: "var(--meld-text-color)",
									fontSize: "14px",
									fontWeight:
										s.value === RESERVED_TAG_KEYWORD ? "bold" : "normal",
								}}
							>
								{s.value === RESERVED_TAG_KEYWORD
									? s.type === "tag"
										? `Untagged (${RESERVED_TAG_KEYWORD})`
										: `No ${s.type} (${RESERVED_TAG_KEYWORD})`
									: s.value}
							</span>
						</div>
					</div>
				))}
			</div>
		);
	};

	const renderQuickSuggestions = () => {
		if (inputValue || searchQuery || searchSuggestions.length === 0)
			return null;

		return (
			<div
				className="meld-search-quick-suggestions"
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "8px",
					marginTop: "8px",
				}}
			>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "8px",
						padding: "0 4px",
					}}
				>
					{searchSuggestions.map((s, idx) =>
						renderKeywordButton(s, idx, "quick"),
					)}
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "8px",
						borderTop: "1px solid var(--comfy-menu-border, #333)",
						paddingTop: "12px",
						marginTop: "4px",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							padding: "0 4px",
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
							}}
						>
							All Keywords
						</div>
						<button
							type="button"
							onClick={toggleShowAllKeywords}
							style={{
								backgroundColor: "transparent",
								border: "none",
								color: "var(--meld-accent-color, #3b82f6)",
								fontSize: "11px",
								cursor: "pointer",
							}}
						>
							{showAllKeywords ? "Show Less" : "Show More"}
						</button>
					</div>
					{showAllKeywords && (
						<div
							style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "8px",
								padding: "0 4px",
								maxHeight: "200px",
								overflowY: "auto",
							}}
						>
							{Array.from(new Set(allKeywords.map((s) => s.type))).map(
								(type, idx) =>
									renderKeywordButton({ type, value: "" }, idx, "all"),
							)}
						</div>
					)}
				</div>
			</div>
		);
	};

	const renderFavorites = () => {
		if (inputValue || favorites.length === 0) return null;

		return (
			<div
				className="meld-search-favorites"
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "8px",
					padding: "4px",
					marginTop: "8px",
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
					{favorites.map((fav) => (
						<FavoriteItem
							key={fav.id}
							fav={fav}
							onSelect={onSelectFavorite}
							onEdit={onEditFavorite}
							onDelete={onDeleteFavorite}
						/>
					))}
				</div>
			</div>
		);
	};

	return (
		<>
			{renderSearchSuggestions()}
			{renderQuickSuggestions()}
			{renderFavorites()}
		</>
	);
};
