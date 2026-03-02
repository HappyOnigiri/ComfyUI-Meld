/**
 * Meld dedicated logger.
 * Investigation logs (log/warn) are only output when MELD_DEV=true (dev mode).
 * Error logs are output regardless of dev mode.
 *
 * This file is the canonical implementation of logging; biome-ignore is required
 * because noConsole forbids console.log while this module must use it.
 */

let isDevMode = false;

/**
 * Initialize the logger with settings.
 */
export const initLogger = (devMode: boolean) => {
	isDevMode = devMode;
	if (isDevMode) {
		// biome-ignore lint/suspicious/noConsole: Logger implementation
		console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
	}
};

/**
 * Log message if dev mode is enabled (Investigation logs).
 */
export const log = (...args: unknown[]) => {
	if (isDevMode) {
		// biome-ignore lint/suspicious/noConsole: Logger implementation
		console.log("[Meld]", ...args);
	}
};

/**
 * Log warning message if dev mode is enabled (Investigation logs).
 */
export const warn = (...args: unknown[]) => {
	if (isDevMode) {
		console.warn("[Meld]", ...args);
	}
};

/**
 * Log error message.
 * Error logs are output regardless of dev mode (MELD_DEV status).
 */
export const error = (...args: unknown[]) => {
	console.error("[Meld]", ...args);
};

export const logger = {
	log,
	warn,
	error,
	init: initLogger,
};
