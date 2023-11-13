/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import router from "../router";
import i18n from "./i18n";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
    loadFonts();
    app.use(router).use(i18n);
}
