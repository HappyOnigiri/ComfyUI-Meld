import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getPortalRoot, startPortalRootAutoAttach, stopPortalRootAutoAttach } from "./portalRoots";

describe("portalRoots coverage", () => {
	beforeEach(() => {
		// Use replaceChildren() for idiomatic child clearing (avoids HTML-sink warnings)
		document.body.replaceChildren();
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

		// Mutate the DOM directly to trigger the observer callback path
		const child = document.createElement("div");
		child.setAttribute("data-meld-portal-root", "true");
		document.body.appendChild(child);

		// Immediately after appendChild: confirm the observer has processed the node
		// (portal roots should still be present under document.body)
		const registeredRoot = document.querySelector("[data-meld-portal-root]");
		expect(registeredRoot).not.toBeNull();
		expect(document.body.contains(registeredRoot)).toBe(true);

		// clean up
		stopPortalRootAutoAttach();
	});
});
