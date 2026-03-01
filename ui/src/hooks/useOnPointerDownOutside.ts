import { useEffect } from "react";

interface UseOnPointerDownOutsideOptions {
	enabled: boolean;
	insideRefs: ReadonlyArray<React.RefObject<HTMLElement | null>>;
	onOutside: (event: PointerEvent) => void;
	options?: {
		capture?: boolean;
		ignoreNonPrimary?: boolean;
	};
}

/**
 * Detects pointerdown events outside of the provided refs.
 * Uses capture phase by default so it can reliably observe events
 * before other bubbling handlers alter propagation.
 */
export const useOnPointerDownOutside = ({
	enabled,
	insideRefs,
	onOutside,
	options,
}: UseOnPointerDownOutsideOptions): void => {
	const capture = options?.capture ?? true;
	const ignoreNonPrimary = options?.ignoreNonPrimary ?? true;

	useEffect(() => {
		if (!enabled) return;

		const handlePointerDown = (event: PointerEvent) => {
			if (
				ignoreNonPrimary &&
				((event.pointerType === "mouse" && event.button !== 0) ||
					!event.isPrimary)
			) {
				return;
			}

			const target = event.target;
			if (!(target instanceof Node)) {
				return;
			}

			const isInside = insideRefs.some((ref) => {
				const element = ref.current;
				return element ? element.contains(target) : false;
			});

			if (!isInside) {
				onOutside(event);
			}
		};

		window.addEventListener("pointerdown", handlePointerDown, { capture });
		return () => {
			window.removeEventListener("pointerdown", handlePointerDown, {
				capture,
			});
		};
	}, [enabled, insideRefs, onOutside, capture, ignoreNonPrimary]);
};
