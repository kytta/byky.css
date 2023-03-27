import { defineConfig } from "vite";
import lightningcss from "vite-plugin-lightningcss";

export default defineConfig({
	css: {
		devSourcemap: true,
	},
	plugins: [lightningcss({})],
});
