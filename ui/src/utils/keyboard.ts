import type React from "react";

export const stopKeyboardEvent = (e: KeyboardEvent): void => {
	e.preventDefault();
	e.stopPropagation();
	e.stopImmediatePropagation();
};

export const stopReactKeyboardEvent = (e: React.KeyboardEvent): void => {
	e.preventDefault();
	e.stopPropagation();
	e.nativeEvent.stopImmediatePropagation();
};

export const isEditableActiveElement = (): boolean => {
	const el = document.activeElement;
	if (!(el instanceof HTMLElement)) {
		return false;
	}

	const tagName = el.tagName;
	return tagName === "INPUT" || tagName === "TEXTAREA" || el.isContentEditable;
};
