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
 * Public contract: callers must not prepend "[Meld]" because this logger adds it.
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
		// biome-ignore lint/suspicious/noConsole: Logger implementation
		console.warn("[Meld]", ...args);
	}
};

/**
 * Log error message.
 * Error logs are output regardless of dev mode (MELD_DEV status).
 */
export const error = (...args: unknown[]) => {
	// biome-ignore lint/suspicious/noConsole: Logger implementation
	console.error("[Meld]", ...args);
};

export const logger = {
	log,
	warn,
	error,
	init: initLogger,
};
