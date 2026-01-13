import type React from "react";
import { useEffect, useRef, useState } from "react";

interface LazyRenderProps {
	children: React.ReactNode;
	height?: number;
	rootMargin?: string;
}

export const LazyRender: React.FC<LazyRenderProps> = ({
	children,
	height = 150,
	rootMargin = "400px",
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
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
			style={{
				minHeight: isVisible ? "auto" : `${height}px`,
				width: "100%",
				containIntrinsicSize: `auto ${height}px`,
				contentVisibility: "auto",
			}}
		>
			{isVisible ? children : null}
		</div>
	);
};
