import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  build: {
    rollupOptions: {
      input: {
        main: "src/main.ts",
        subApp1: "../sub-app-1/src/main.ts", // 子应用1
        subApp2: "../sub-app-2/src/main.ts", // 子应用2
      },
    },
  },
});
