import { colorPalette } from "./packages/design-system/src/theme/ColorPalette";
import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";

const paragraphPlugin: PluginCreator = ({ addComponents }) =>
  addComponents({
    ".body": {
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "24px",
      color: colorPalette.accent300,
    },
    ".body2": {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      color: colorPalette.accent300,
    },
    ".body3": {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "24px",
      color: colorPalette.accent300,
    },
    ".body4": {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "24px",
      color: colorPalette.accent300,
    },
  });

const headerPlugin: PluginCreator = ({ addBase }) =>
  addBase({
    ".hero": {
      fontFamily: "Simple Serenity Serif",
      fontSize: "168px",
      fontWeight: "500",
      lineHeight: "72px",
      color: colorPalette.accent300,
    },
    h1: {
      fontFamily: "Eiko",
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "40px",
      color: colorPalette.accent300,
    },
    h2: {
      fontFamily: "Eiko",
      fontSize: "36px",
      fontWeight: "700",
      lineHeight: "36px",
      color: colorPalette.accent300,
    },
    h3: {
      fontFamily: "Eiko",
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "32px",
      color: colorPalette.accent300,
    },
    h4: {
      fontFamily: "Eiko",
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "28px",
      color: colorPalette.accent300,
    },
  });

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      ...colorPalette,
    },
    fontFamily: {
      hero: ["simple-serenity-serif", "serif"],
      heading: ["eiko", "sans-serif"],
      body: ["neue", "sans-serif"],
    },
    // Move these values into the theme design system package
    extend: {
      spacing: {
        sm: "8px",
        md: "16px",
        l: "24px",
        xl: "32px",
        xxl: "48px",
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        xxl: "16px",
        xxxl: "24px",
        full: "9999px",
      },
    },
  },
  plugins: [paragraphPlugin, headerPlugin],
};
export default config;
