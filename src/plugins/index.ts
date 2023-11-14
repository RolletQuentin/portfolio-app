/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import { router } from "../router";
import i18n from "./i18n";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
    loadFonts();
    app.use(router).use(i18n).use(mdiVue, {
        icons: mdijs,
    });
}
