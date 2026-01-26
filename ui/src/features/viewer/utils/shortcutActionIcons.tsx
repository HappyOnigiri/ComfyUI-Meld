import type React from "react";

export type ShortcutActionIconProps = Omit<
	React.SVGProps<SVGSVGElement>,
	"color" | "children"
> & {
	size?: number | string;
	color?: string;
};

type IconBaseProps = ShortcutActionIconProps & {
	children?: React.ReactNode;
};

function IconBase({
	size = 24,
	color,
	children,
	...svgProps
}: IconBaseProps): React.JSX.Element {
	return (
		<svg
			{...svgProps}
			width={size}
			height={size}
			// Use a tighter viewBox to reduce perceived padding and make icons
			// fill the available size more similarly to lucide icons.
			viewBox="2 2 20 20"
			fill="none"
			stroke={color ?? "currentColor"}
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
		>
			{children}
		</svg>
	);
}

function PlusBadge(): React.JSX.Element {
	// A small plus badge that indicates the mask variant (as requested).
	return (
		<>
			{/* Unframed plus mark with a background-colored halo for legibility */}
			<path
				d="M18 16.6v2.8"
				stroke="var(--meld-icon-halo, transparent)"
				strokeWidth={4}
			/>
			<path
				d="M16.6 18h2.8"
				stroke="var(--meld-icon-halo, transparent)"
				strokeWidth={4}
			/>
			<path d="M18 16.6v2.8" />
			<path d="M16.6 18h2.8" />
		</>
	);
}

export function AddUnifiedLoaderIcon(
	props: ShortcutActionIconProps,
): React.JSX.Element {
	return (
		<IconBase {...props}>
			{/* Simple right arrow */}
			<path d="M6 12h12" />
			<path d="M14 8l4 4-4 4" />
		</IconBase>
	);
}

export function RestoreFullWorkflowIcon(
	props: ShortcutActionIconProps,
): React.JSX.Element {
	return (
		<IconBase {...props}>
			<path d="M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" />
			<path d="M8 12h4" />
			<path d="M8 15h3" />
			<path d="M13 12l3 0" />
			<path d="M15.5 10.5l3 1.5-3 1.5" />
		</IconBase>
	);
}

export function QueueWorkflowIcon(
	props: ShortcutActionIconProps,
): React.JSX.Element {
	return (
		<IconBase {...props}>
			{/* "Fancy" right arrow: shaft + double chevrons */}
			<path d="M6 12h8" />
			<path d="M12 8l4 4-4 4" />
			<path d="M16 8l4 4-4 4" />
		</IconBase>
	);
}

export function QueueWorkflowMaskIcon(
	props: ShortcutActionIconProps,
): React.JSX.Element {
	return (
		<IconBase {...props}>
			{/* "Fancy" right arrow with plus badge */}
			<path d="M6 12h8" />
			<path d="M12 8l4 4-4 4" />
			<path d="M16 8l4 4-4 4" />
			<PlusBadge />
		</IconBase>
	);
}

export function SendToWorkflowIcon(
	props: ShortcutActionIconProps,
): React.JSX.Element {
	return (
		<IconBase {...props}>
			{/* Square with a right arrow inside */}
			<rect x="4.5" y="4.5" width="15" height="15" rx="2" />
			<path d="M8 12h7" />
			<path d="M13 9l3 3-3 3" />
		</IconBase>
	);
}

export function SendToWorkflowMaskIcon(
	props: ShortcutActionIconProps,
): React.JSX.Element {
	return (
		<IconBase {...props}>
			{/* Square with a right arrow inside + plus badge */}
			<rect x="4.5" y="4.5" width="15" height="15" rx="2" />
			<path d="M8 12h7" />
			<path d="M13 9l3 3-3 3" />
			<PlusBadge />
		</IconBase>
	);
}

export function EditSourceImageIcon(
	props: ShortcutActionIconProps,
): React.JSX.Element {
	return (
		<IconBase {...props}>
			<rect x="4.5" y="6" width="12.5" height="10.5" rx="2" />
			<path d="M7.5 13l2-2 2 2 2.5-3 2.5 3" />
			<path d="M14.5 17.5l5-5" />
			<path d="M16.5 19.5l3-3" />
		</IconBase>
	);
}

export function EditTagsIcon(
	props: ShortcutActionIconProps,
): React.JSX.Element {
	return (
		<IconBase {...props}>
			<path d="M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" />
			<circle cx="7.5" cy="8.5" r="1" />
		</IconBase>
	);
}

export function RestoreImageIcon(
	props: ShortcutActionIconProps,
): React.JSX.Element {
	return (
		<IconBase {...props}>
			<path d="M7 7h10" />
			<path d="M9 7v-2h6v2" />
			<path d="M8 7l1 12h6l1-12" />
			<path d="M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" />
			<path d="M14.5 9.5v3h-3" />
		</IconBase>
	);
}

export function DeleteOrTrashIcon(
	props: ShortcutActionIconProps,
): React.JSX.Element {
	return (
		<IconBase {...props}>
			<path d="M7 7h10" />
			<path d="M9 7v-2h6v2" />
			<path d="M8 7l1 12h6l1-12" />
			<path d="M10.5 11v5" />
			<path d="M13.5 11v5" />
		</IconBase>
	);
}
