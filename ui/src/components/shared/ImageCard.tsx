import type React from "react";
import { DetailedImageCard } from "../../features/viewer/components/DetailedImageCard";
import { useGallery } from "../../store/GalleryContext";
import type { MeldImage } from "../../types";
import { SimpleImageCard } from "./SimpleImageCard";

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
