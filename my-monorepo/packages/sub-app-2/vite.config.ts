import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    // alias: {
    //   // 为 sub-app-1 添加别名，指向子应用的实际路径
    //   'sub-app-1': path.resolve(__dirname, '../sub-app-1'),
    //   'sub-app-2': path.resolve(__dirname, '../sub-app-2')
    // }
  }
});
