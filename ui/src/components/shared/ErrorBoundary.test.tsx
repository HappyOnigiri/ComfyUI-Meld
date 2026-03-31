import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { FC } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { logger } from "../../logger";
import { ErrorBoundary } from "./ErrorBoundary";

// Suppress React's internal console.error calls when an Error Boundary fires.
// biome-ignore lint/suspicious/noConsole: test setup must reference console to spy on it
const originalConsoleError = console.error;
beforeEach(() => {
	vi.spyOn(console, "error").mockImplementation((...args: unknown[]) => {
		// Allow non-React-boundary errors through to avoid masking real issues.
		const msg = typeof args[0] === "string" ? args[0] : "";
		if (
			msg.includes("The above error occurred") ||
			msg.includes("ErrorBoundary") ||
			msg.includes("react-dom") ||
			msg.includes("React will try to recreate")
		) {
			return;
		}
		originalConsoleError(...args);
	});
	vi.spyOn(logger, "error").mockImplementation(() => {});
});

/** Helper component that throws during render when `shouldThrow` is true. */
const ThrowingComponent: FC<{ shouldThrow?: boolean }> = ({ shouldThrow = false }) => {
	if (shouldThrow) {
		throw new Error("test render error");
	}
	return <div>child content</div>;
};

describe("ErrorBoundary", () => {
	it("renders children when no error occurs", () => {
		render(
			<ErrorBoundary section="test">
				<ThrowingComponent />
			</ErrorBoundary>,
		);
		expect(screen.getByText("child content")).toBeInTheDocument();
	});

	it("renders fallback UI when a child throws during render", () => {
		render(
			<ErrorBoundary section="test">
				<ThrowingComponent shouldThrow />
			</ErrorBoundary>,
		);
		expect(screen.getByRole("button", { name: "Retry" })).toBeInTheDocument();
	});

	it("shows the default message when fallbackMessage is not provided", () => {
		render(
			<ErrorBoundary section="test">
				<ThrowingComponent shouldThrow />
			</ErrorBoundary>,
		);
		expect(screen.getByText("An error occurred in this section.")).toBeInTheDocument();
	});

	it("shows a custom fallbackMessage when provided", () => {
		render(
			<ErrorBoundary section="test" fallbackMessage="Custom error message">
				<ThrowingComponent shouldThrow />
			</ErrorBoundary>,
		);
		expect(screen.getByText("Custom error message")).toBeInTheDocument();
	});

	it("calls logger.error with section name and error info when a child throws", () => {
		render(
			<ErrorBoundary section="my-section">
				<ThrowingComponent shouldThrow />
			</ErrorBoundary>,
		);
		expect(logger.error).toHaveBeenCalledWith(
			expect.stringContaining("my-section"),
			expect.any(Error),
			expect.anything(),
		);
	});

	it("re-renders children after the retry button is clicked", async () => {
		const user = userEvent.setup();

		// Use a controlled flag so we can make the component stop throwing after retry.
		let shouldThrow = true;
		const ControlledThrower: FC = () => {
			if (shouldThrow) throw new Error("retry test error");
			return <div>recovered content</div>;
		};

		render(
			<ErrorBoundary section="test">
				<ControlledThrower />
			</ErrorBoundary>,
		);

		// Fallback UI is shown initially.
		expect(screen.getByRole("button", { name: "Retry" })).toBeInTheDocument();

		// Allow the component to render without throwing on the next attempt.
		shouldThrow = false;
		await user.click(screen.getByRole("button", { name: "Retry" }));

		expect(screen.getByText("recovered content")).toBeInTheDocument();
	});

	it("calls onReset callback when the retry button is clicked", async () => {
		const user = userEvent.setup();
		const onReset = vi.fn();

		render(
			<ErrorBoundary section="test" onReset={onReset}>
				<ThrowingComponent shouldThrow />
			</ErrorBoundary>,
		);

		await user.click(screen.getByRole("button", { name: "Retry" }));
		expect(onReset).toHaveBeenCalledTimes(1);
	});
});
