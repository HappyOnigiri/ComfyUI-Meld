import { resolve } from "node:path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	define: {
		__APP_VERSION__: JSON.stringify("test"),
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			"/scripts/api.js": resolve(
				__dirname,
				"./src/test/__mocks__/comfyApi.ts",
			),
			"/scripts/app.js": resolve(
				__dirname,
				"./src/test/__mocks__/comfyApp.ts",
			),
		},
	},
	test: {
		environment: "jsdom",
		setupFiles: ["./src/test/setup.ts"],
		include: ["src/**/*.test.{ts,tsx}"],
	},
});
