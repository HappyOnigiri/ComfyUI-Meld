const normalizeNodeType = (type: string | undefined): string => {
	if (!type) {
		return "";
	}
	return type.replace(/\s+/g, "").toLowerCase();
};

export const isLoaderNodeType = (type: string | undefined): boolean => {
	const normalized = normalizeNodeType(type);
	return normalized === "meldimageloader" || normalized === "loadimage";
};

export const isMaskNodeType = (type: string | undefined): boolean =>
	normalizeNodeType(type) === "loadimagemask";

export const isLoaderOrMaskNodeType = (type: string | undefined): boolean =>
	isLoaderNodeType(type) || isMaskNodeType(type);
