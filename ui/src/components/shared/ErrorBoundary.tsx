import { AlertCircle } from "lucide-react";
import React from "react";
import { logger } from "../../logger";

interface ErrorBoundaryProps {
	children: React.ReactNode;
	/** Section name used for logging and display. */
	section: string;
	/** Custom fallback message. Defaults to "An error occurred in this section." */
	fallbackMessage?: string;
	/** Optional callback invoked when the user clicks the retry button. */
	onReset?: () => void;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

/**
 * Error Boundary component that catches render errors in a section of the tree
 * and displays a fallback UI with a retry button instead of crashing the entire panel.
 *
 * Implemented as a class component because getDerivedStateFromError and
 * componentDidCatch are class-only React lifecycle APIs.
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: React.ErrorInfo): void {
		logger.error(
			`[ErrorBoundary] Uncaught error in section "${this.props.section}":`,
			error,
			info.componentStack,
		);
	}

	private handleRetry = (): void => {
		this.setState({ hasError: false });
		this.props.onReset?.();
	};

	render(): React.ReactNode {
		if (this.state.hasError) {
			const message = this.props.fallbackMessage ?? "An error occurred in this section.";
			return (
				<div className="meld-error-boundary">
					<AlertCircle className="meld-error-boundary__icon" size={20} aria-hidden="true" />
					<p className="meld-error-boundary__message">{message}</p>
					<button type="button" className="meld-error-boundary__retry" onClick={this.handleRetry}>
						Retry
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}
