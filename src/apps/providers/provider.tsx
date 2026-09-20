"use client";

import { config } from "@/apps/providers/theme";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

export function Provider(props: ColorModeProviderProps) {
  const system = createSystem(defaultConfig, config);

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider
        {...props}
        defaultTheme="light" // This forces the initial state to Light
        enableSystem={false} // This prevents it from following your OS dark mode
      />
    </ChakraProvider>
  );
}
