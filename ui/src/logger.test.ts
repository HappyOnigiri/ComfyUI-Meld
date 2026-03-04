import { afterAll, afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { error, initLogger, log, warn } from "./logger";

describe("logger", () => {
	// Mock console methods
	const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
	const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
	const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

	beforeEach(() => {
		logSpy.mockClear();
		warnSpy.mockClear();
		errorSpy.mockClear();
	});

	afterEach(() => {
		// Reset dev mode
		initLogger(false);
		logSpy.mockClear();
		warnSpy.mockClear();
		errorSpy.mockClear();
	});

	afterAll(() => {
		logSpy.mockRestore();
		warnSpy.mockRestore();
		errorSpy.mockRestore();
	});

	describe("initLogger", () => {
		it("outputs initialization message when dev mode is enabled", () => {
			initLogger(true);
			expect(logSpy).toHaveBeenCalledWith("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
		});

		it("does not output initialization message when dev mode is disabled", () => {
			initLogger(false);
			expect(logSpy).not.toHaveBeenCalled();
		});
	});

	describe("log", () => {
		it("outputs message in dev mode", () => {
			initLogger(true);
			logSpy.mockClear();
			log("test message");
			expect(logSpy).toHaveBeenCalledWith("[Meld]", "test message");
		});

		it("does not output message when not in dev mode", () => {
			initLogger(false);
			logSpy.mockClear();
			log("test message");
			expect(logSpy).not.toHaveBeenCalled();
		});
	});

	describe("warn", () => {
		it("outputs warning in dev mode", () => {
			initLogger(true);
			warn("warning message");
			expect(warnSpy).toHaveBeenCalledWith("[Meld]", "warning message");
		});

		it("does not output warning when not in dev mode", () => {
			initLogger(false);
			warn("warning message");
			expect(warnSpy).not.toHaveBeenCalled();
		});
	});

	describe("error", () => {
		it("outputs error regardless of dev mode", () => {
			initLogger(false);
			error("error message");
			expect(errorSpy).toHaveBeenCalledWith("[Meld]", "error message");
		});

		it("outputs error in dev mode", () => {
			initLogger(true);
			error("error message");
			expect(errorSpy).toHaveBeenCalledWith("[Meld]", "error message");
		});
	});
});
