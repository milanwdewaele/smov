import en from "@/assets/locales/en.json";
import nl from "@/assets/locales/nl.json";

export const locales = {
  en,
  nl,
};

export type Locales = keyof typeof locales;
