import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  define: {
    "process.env": {
      HOST: "aws.connect.psdb.cloud",
      USERNAME: "uuavqoua94oqm24m19q0",
      PASSWORD: "pscale_pw_QEk6DI3FFmtSTkq8nHwiKSwsGkM9gnBSfJUNDQAbvCf",
    },
  },
});
