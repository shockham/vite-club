import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createI18n } from "vue-i18n";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import messages from "@intlify/vite-plugin-vue-i18n/messages";
import App from "./App.vue";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const i18n = createI18n({
  locale: "en",
  messages,
});

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount("#app");
