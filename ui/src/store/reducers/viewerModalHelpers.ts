export function resolveInitialMaskMode(
	payload: number | { initialMaskMode?: unknown },
): "apply" | "run" | false {
	if (typeof payload === "number") {
		return false;
	}

	const mode = payload.initialMaskMode;
	if (!mode) {
		return false;
	}

	if (mode === "apply" || mode === "run") {
		return mode;
	}

	if (mode === true) {
		return "run";
	}

	return false;
}
