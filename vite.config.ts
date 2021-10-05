import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import VueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      globalComponentsDeclaration: true,
      dts: "src/components.d.ts",
    }),
    Pages(),
    Layouts(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n"],
      dts: "src/auto-imports.d.ts",
    }),
    VueI18n({
      include: path.resolve(__dirname, "lang/**"),
    }),
  ],
});
