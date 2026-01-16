export const getImageViewUrl = (img: {
	filename: string;
	subfolder: string;
	type?: string | null;
}) => {
	if (!img.filename) return "";

	if (img.type === "custom") {
		return `/api/meld/view-custom?filename=${encodeURIComponent(
			img.filename,
		)}&subfolder=${encodeURIComponent(img.subfolder)}`;
	}

	const type = img.type || "output";
	return `/api/view?filename=${encodeURIComponent(
		img.filename,
	)}&type=${type}&subfolder=${encodeURIComponent(img.subfolder)}`;
};
