import type React from "react";
import { useEffect, useRef, useState } from "react";

interface LazyRenderProps {
	children: React.ReactNode;
	height?: number;
	rootMargin?: string;
	className?: string;
	style?: React.CSSProperties;
}

export const LazyRender: React.FC<LazyRenderProps> = ({
	children,
	height = 150,
	rootMargin = "400px",
	className,
	style,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ rootMargin },
		);

		const currentRef = containerRef.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [rootMargin]);

	return (
		<div
			ref={containerRef}
			className={className}
			style={{
				minHeight: `${height}px`,
				overflow: "hidden",
				...style,
			}}
		>
			{isVisible ? children : null}
		</div>
	);
};
