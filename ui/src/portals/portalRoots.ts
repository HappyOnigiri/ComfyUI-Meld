export type PortalRootKey = "lightTable" | "bulkActionBar";

type PortalRootDefinition = {
	id: string;
	preferredParentSelector: string;
};

const portalRootDefinitions: Record<PortalRootKey, PortalRootDefinition> = {
	lightTable: {
		id: "meld-light-table-portal",
		preferredParentSelector: ".comfyui-body-bottom",
	},
	bulkActionBar: {
		id: "meld-bulk-bar-portal",
		preferredParentSelector: ".comfyui-body-bottom",
	},
};

const portalRootKeys = Object.keys(portalRootDefinitions) as PortalRootKey[];
const portalRoots = new Map<PortalRootKey, HTMLDivElement>();

let portalObserver: MutationObserver | null = null;
let scheduledRafId: number | null = null;

function getPreferredParent(selector: string): HTMLElement {
	const preferred = document.querySelector(selector);
	if (preferred instanceof HTMLElement) {
		return preferred;
	}
	return document.body;
}

function createPortalRoot(key: PortalRootKey): HTMLDivElement {
	const definition = portalRootDefinitions[key];
	const existing = document.getElementById(definition.id);
	if (existing instanceof HTMLDivElement) {
		existing.dataset.meldPortalRoot = key;
		return existing;
	}

	const root = document.createElement("div");
	root.id = definition.id;
	root.dataset.meldPortalRoot = key;
	// Requirement: keep global layer ordering in CSS tokens only.
	// Do not set root.style.zIndex here.
	return root;
}

function ensurePortalRootAttached(key: PortalRootKey): HTMLDivElement {
	const definition = portalRootDefinitions[key];
	const root = portalRoots.get(key) ?? createPortalRoot(key);
	portalRoots.set(key, root);

	const parent = getPreferredParent(definition.preferredParentSelector);
	if (root.parentElement !== parent || !document.contains(root)) {
		parent.appendChild(root);
	}

	return root;
}

function ensureAllPortalRootsAttached(): void {
	for (const key of portalRootKeys) {
		ensurePortalRootAttached(key);
	}
}

function scheduleEnsureAllPortalRootsAttached(): void {
	if (scheduledRafId !== null) {
		return;
	}

	scheduledRafId = requestAnimationFrame(() => {
		scheduledRafId = null;
		ensureAllPortalRootsAttached();
	});
}

export function getPortalRoot(key: PortalRootKey): HTMLDivElement {
	return ensurePortalRootAttached(key);
}

export function startPortalRootAutoAttach(): void {
	if (portalObserver || typeof document === "undefined" || !document.body) {
		return;
	}

	ensureAllPortalRootsAttached();

	portalObserver = new MutationObserver(() => {
		scheduleEnsureAllPortalRootsAttached();
	});

	portalObserver.observe(document.body, {
		childList: true,
		subtree: true,
	});
}

export function stopPortalRootAutoAttach(): void {
	if (portalObserver) {
		portalObserver.disconnect();
		portalObserver = null;
	}

	if (scheduledRafId !== null) {
		cancelAnimationFrame(scheduledRafId);
		scheduledRafId = null;
	}
}
