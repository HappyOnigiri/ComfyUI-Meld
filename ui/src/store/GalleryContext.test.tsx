import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { GalleryProvider, useGallery } from "./GalleryContext";

const DummyChild = () => {
	const gallery = useGallery();
	return <div>{gallery ? "Success" : "Fail"}</div>;
};

describe("GalleryContext", () => {
	it("renders children with provider and provides context", () => {
		const { container, getByText } = render(
			<GalleryProvider>
				<DummyChild />
			</GalleryProvider>,
		);
		expect(container).toBeTruthy();
		expect(getByText("Success")).toBeTruthy();
	});
});
