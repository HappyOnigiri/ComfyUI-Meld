/**
 * Meld dedicated logger.
 * Logs are only output when dev mode is enabled.
 */

let isDevMode = false;

/**
 * Initialize the logger with settings.
 */
export const initLogger = (devMode: boolean) => {
	isDevMode = devMode;
	if (isDevMode) {
		console.log("[Meld] Logger initialized in DEV mode.");
	}
};

/**
 * Log message if dev mode is enabled.
 */
export const log = (...args: unknown[]) => {
	if (isDevMode) {
		console.log("[Meld]", ...args);
	} else {
		// For debugging: verify that the log is being skipped
		// console.debug("[Meld] Log skipped (devMode is false)");
	}
};

/**
 * Log warning message if dev mode is enabled.
 */
export const warn = (...args: unknown[]) => {
	if (isDevMode) {
		console.warn("[Meld]", ...args);
	}
};

/**
 * Log error message.
 * Error logs are output regardless of dev mode for debugging critical issues,
 * but prefixed with [Meld].
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
