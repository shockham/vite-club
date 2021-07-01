import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteComponents from "vite-plugin-components";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      globalComponentsDeclaration: true,
    }),
    Pages(),
    Layouts(),
    vueI18n({
      include: path.resolve(__dirname, "lang/**"),
    }),
  ],
});
