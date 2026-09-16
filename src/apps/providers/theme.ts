import { defineConfig, defineTokens } from "@chakra-ui/react";

export const tokens = defineTokens({
  colors: {
    textForLight: { value: "#1a1a1a" },
    textForDark: { value: "#d6d6d6" },

    secondaryTextColor: { value: "#575757" },

    textMutedForLight: { value: "#71717A" },
    textMutedForDark: { value: "#A1A1AA" },

    bgForLight: { value: "#f5f5f5" },
    bgForDark: { value: "#18181B" },

    borderColorForLight: { value: "#DDDDDD" },
    borderColorForDark: { value: "#222222" },
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
  },
});
