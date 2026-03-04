import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SettingItem } from "./SettingItem";

describe("SettingItem", () => {
	it("label, description, children を正しくレンダリングする", () => {
		render(
			<SettingItem label="Test Label" description="Test Description">
				<input data-testid="child-input" />
			</SettingItem>,
		);
		expect(screen.getByText("Test Label")).toBeInTheDocument();
		expect(screen.getByText("Test Description")).toBeInTheDocument();
		expect(screen.getByTestId("child-input")).toBeInTheDocument();
	});

	it("正しいCSSクラスが適用される", () => {
		const { container } = render(
			<SettingItem label="Label" description="Desc">
				<span>child</span>
			</SettingItem>,
		);
		expect(container.querySelector(".meld-settings-item")).toBeInTheDocument();
		expect(container.querySelector(".meld-settings-item__label")).toBeInTheDocument();
		expect(container.querySelector(".meld-settings-item__description")).toBeInTheDocument();
		expect(container.querySelector(".meld-settings-item__control")).toBeInTheDocument();
	});
});
