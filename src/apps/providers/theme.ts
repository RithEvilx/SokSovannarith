import { defineConfig, defineSemanticTokens, defineTokens } from "@chakra-ui/react";

export const tokens = defineTokens({
  fonts: {
    body: { value: `'DMSans', 'NotoSansKhmer', serif` },
    heading: { value: `'DMSans', 'NotoSansKhmer', serif` },
  },
  colors: {
    // ─── Neutral ────────────
    neutral: {
      50: { value: "#f5f5f5" }, // bg (light)
      100: { value: "#ebebeb" },
      200: { value: "#DDDDDD" }, // border (light)
      300: { value: "#d6d6d6" }, // text (dark mode)
      400: { value: "#A1A1AA" }, // text muted (dark mode)
      500: { value: "#71717A" }, // text muted (light)
      600: { value: "#575757" }, // secondary text
      700: { value: "#222222" }, // border (dark mode)
      800: { value: "#1a1a1a" }, // text (light)
      900: { value: "#18181B" }, // bg (dark mode)
    },

    accent: {
      50: { value: "blue.500" },
    },
  },
});

export const semanticTokens = defineSemanticTokens({
  colors: {
    theme: {
      text: { value: { base: "{colors.neutral.800}", _dark: "{colors.neutral.300}" } },
      textSubtle: { value: { base: "{colors.neutral.600}", _dark: "{colors.neutral.600}" } },
      textMuted: { value: { base: "{colors.neutral.500}", _dark: "{colors.neutral.400}" } },

      bg: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.900}" } },

      border: { value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.700}" } },

      accent: { value: { base: "{colors.accent.50}", _dark: "{colors.accent.50}" } },
    },
  },
});

export const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "375px", // phones (portrait + landscape)
      md: "768px", // tablets (iPad & other tablets, BOTH orientations)
      lg: "1200px", // laptops / small desktops
      xl: "1536px", // large desktops
      "2xl": "1920px", // very big screens (optional)
    },
    tokens,
    semanticTokens,
  },
});
