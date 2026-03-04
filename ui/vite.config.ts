
import fs from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const pyprojectPath = resolve(__dirname, "../pyproject.toml");
let pyprojectToml = "";
try {
	if (fs.existsSync(pyprojectPath)) {
		pyprojectToml = fs.readFileSync(pyprojectPath, "utf-8");
	}
} catch (_e) {
	pyprojectToml = "";
}
const versionMatch = pyprojectToml.match(/version\s*=\s*"([^"]+)"/);
const version = versionMatch ? versionMatch[1] : "unknown";

export default defineConfig({
	plugins: [react()],
	define: {
		"process.env.NODE_ENV": JSON.stringify("production"),
		__APP_VERSION__: JSON.stringify(version),
	},
	build: {
		// Output JS file so ComfyUI can load it
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "MeldGallery",
			formats: ["es"],
			fileName: "gallery_extension",
		},
		outDir: "../web/js",
		emptyOutDir: false, // Avoid deleting existing files (due to viewer.js, etc.)
		rollupOptions: {
			// Externalize ComfyUI scripts
			external: [
				"/scripts/app.js",
				"/scripts/api.js",
				"../../../scripts/app.js",
				"../../../scripts/api.js",
			],
			output: {
				// Fixed output filename
				entryFileNames: "gallery_extension.js",
				chunkFileNames: "[name].js",
				assetFileNames: "[name].[ext]",
			},
		},
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
