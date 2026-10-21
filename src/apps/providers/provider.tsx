"use client";

import { config } from "@/apps/providers/theme";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider
        {...props}
        defaultTheme="light" // This forces the initial state to Light
      />
    </ChakraProvider>
  );
}
