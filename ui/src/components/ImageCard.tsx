import type React from "react";
import { useGallery } from "../store/GalleryContext";
import type { MeldImage } from "../types";
import { DetailedImageCard } from "./card/DetailedImageCard";
import { SimpleImageCard } from "./card/SimpleImageCard";

interface ImageCardProps {
	image: MeldImage;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
	const { state } = useGallery();
	const viewMode = state.settings["gallery.view_mode"] || "grid_details";

	return viewMode === "grid_only" ? (
		<SimpleImageCard image={image} />
	) : (
		<DetailedImageCard image={image} />
	);
};
