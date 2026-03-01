export const getThumbnailViewUrl = (
	img: { filename: string; subfolder: string; type?: string | null },
	maxSize: number = 200,
): string => {
	if (!img.filename) return "";
	const enc = encodeURIComponent;
	const type = enc(img.type || "output");
	const subfolder = enc(img.subfolder ?? "");
	const base = `filename=${enc(img.filename)}&type=${type}&subfolder=${subfolder}&size=${maxSize}`;
	return `/api/meld/view-thumb?${base}`;
};

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

	if (img.type === "trash") {
		return `/api/meld/view-trash?filename=${encodeURIComponent(img.filename)}`;
	}

	const type = img.type || "output";
	return `/api/view?filename=${encodeURIComponent(
		img.filename,
	)}&type=${type}&subfolder=${encodeURIComponent(img.subfolder)}`;
};
