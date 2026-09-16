import { useColorMode } from "../providers/color-mode";

export const ContainerHoverStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "1.5rem",
  rounded: "lg",
  padding: { base: "1rem", md: "1.25rem" },
  transition: "all 0.15s",
  border: "1px solid",
  borderColor: {
    _light: "borderColorForLight",
    _dark: "borderColorForDark",
  },
  _hover: {
    boxShadow: "sm",
  },
  color: { _dark: "textForDark", _light: "textForLight" },
  bgColor: { _dark: "bgForDark", _light: "transparent" },
};

export const useColorModeTheme = () => {
  const { colorMode } = useColorMode();

  const bgColorMode = colorMode === "dark" ? "bgForDark" : "bgForLight";
  const textColorMode = colorMode === "dark" ? "textForDark" : "textForLight";
  const textMutedColorMode =
    colorMode === "dark" ? "textMutedForDark" : "textMutedForLight";
  const borderColorMode =
    colorMode === "dark" ? "borderColorForDark" : "borderColorForLight";
  // const focusColorMode = colorMode === "dark" ? "#ffffff" : "#000000";
  const focusColorMode = "blue.500";

  return {
    bgColorMode,
    textColorMode,
    borderColorMode,
    textMutedColorMode,
    focusColorMode,
  } as const;
};
