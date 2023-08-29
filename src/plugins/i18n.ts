import { createI18n } from "vue-i18n";
import fr from "@/locales/fr.js";
import en from "@/locales/en.js";

export default createI18n({
    legacy: false,
    locale: "fr",
    fallbackLocale: "fr",
    messages: {
        fr,
        en,
    },
});
