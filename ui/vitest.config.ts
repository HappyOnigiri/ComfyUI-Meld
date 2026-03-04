import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	define: {
		__APP_VERSION__: JSON.stringify("test"),
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			"/scripts/api.js": resolve(__dirname, "./src/test/__mocks__/comfyApi.ts"),
			"/scripts/app.js": resolve(__dirname, "./src/test/__mocks__/comfyApp.ts"),
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/test/setup.ts"],
		include: ["src/**/*.test.{ts,tsx}"],
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			include: ["src/**/*.{ts,tsx}"],
			exclude: ["node_modules/", "src/test/"],
			thresholds: {
				lines: 20,
				functions: 20,
				branches: 20,
				statements: 20,
			},
		},
	},
});
