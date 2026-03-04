import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { error, initLogger, log, warn } from "./logger";

describe("logger", () => {
	// コンソールメソッドをモック
	const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
	const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
	const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

	beforeEach(() => {
		logSpy.mockClear();
		warnSpy.mockClear();
		errorSpy.mockClear();
	});

	afterEach(() => {
		// devモードをリセット
		initLogger(false);
		logSpy.mockClear();
	});

	describe("initLogger", () => {
		it("devモードが有効な場合、初期化メッセージを出力する", () => {
			initLogger(true);
			expect(logSpy).toHaveBeenCalledWith("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
		});

		it("devモードが無効な場合、初期化メッセージを出力しない", () => {
			initLogger(false);
			expect(logSpy).not.toHaveBeenCalled();
		});
	});

	describe("log", () => {
		it("devモード時にメッセージを出力する", () => {
			initLogger(true);
			logSpy.mockClear();
			log("test message");
			expect(logSpy).toHaveBeenCalledWith("[Meld]", "test message");
		});

		it("非devモード時にはメッセージを出力しない", () => {
			initLogger(false);
			logSpy.mockClear();
			log("test message");
			expect(logSpy).not.toHaveBeenCalled();
		});
	});

	describe("warn", () => {
		it("devモード時に警告を出力する", () => {
			initLogger(true);
			warn("warning message");
			expect(warnSpy).toHaveBeenCalledWith("[Meld]", "warning message");
		});

		it("非devモード時には警告を出力しない", () => {
			initLogger(false);
			warn("warning message");
			expect(warnSpy).not.toHaveBeenCalled();
		});
	});

	describe("error", () => {
		it("devモードに関わらずエラーを出力する", () => {
			initLogger(false);
			error("error message");
			expect(errorSpy).toHaveBeenCalledWith("[Meld]", "error message");
		});

		it("devモード時もエラーを出力する", () => {
			initLogger(true);
			error("error message");
			expect(errorSpy).toHaveBeenCalledWith("[Meld]", "error message");
		});
	});
});
