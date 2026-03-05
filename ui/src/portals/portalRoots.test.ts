import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getPortalRoot, startPortalRootAutoAttach, stopPortalRootAutoAttach } from "./portalRoots";

describe("portalRoots coverage", () => {
	beforeEach(() => {
		document.body.innerHTML = "";
	});

	afterEach(() => {
		stopPortalRootAutoAttach();
	});

	it("covers core portal functionality", () => {
		// ensure start/stop work (should not throw and should set up observer)
		startPortalRootAutoAttach();

		// Check getting a portal root
		const root = getPortalRoot("lightTable");
		expect(root).toBeDefined();
		// Since pref_parent doesn't exist, it falls back to document.body
		expect(root.parentElement).toBe(document.body);

		// Add pref_parent to the DOM and try getting portal root again
		const testParent = document.createElement("div");
		testParent.className = "comfyui-body-bottom";
		document.body.appendChild(testParent);

		const root2 = getPortalRoot("bulkActionBar");
		expect(root2).toBeDefined();
		expect(root2.parentElement).toBe(testParent);

		// trigger an observer callback directly by mutating DOM
		const child = document.createElement("div");
		child.setAttribute("data-meld-portal-root", "true");
		document.body.appendChild(child);

		// clean up
		stopPortalRootAutoAttach();
	});
});
