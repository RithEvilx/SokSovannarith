import "./Loading.css";
import { Box, Flex } from "@chakra-ui/react";
import { useColorMode } from "@/apps/providers/color-mode";

const Loading = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex width="100dvw" height="100dvh" justifyContent="center" alignItems="center">
      <Flex gap="0.35rem" className="loading">
        <Box boxSize="10px" rounded="full" bgColor={colorMode === "dark" ? "#ffffff" : "#000000"}></Box>
        <Box boxSize="10px" rounded="full" bgColor={colorMode === "dark" ? "#ffffff" : "#000000"}></Box>
        <Box boxSize="10px" rounded="full" bgColor={colorMode === "dark" ? "#ffffff" : "#000000"}></Box>
      </Flex>
    </Flex>
  );
};

export default Loading;
