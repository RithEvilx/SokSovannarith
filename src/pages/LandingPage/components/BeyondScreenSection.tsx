import { useTranslation } from "react-i18next";
import { Box, Flex, Image, Text, IconButton, Carousel, Center } from "@chakra-ui/react";
// Icons
import { LuFullscreen, LuChevronLeft, LuChevronRight } from "react-icons/lu";
// Styles
import { ContainerHoverStyle, useColorModeTheme } from "@/apps/styles/style";
// Data
import { BeyondScreenData } from "@/shared/data/BeyondScreenData";

const BeyondScreenSection = () => {
  const { t } = useTranslation();
  const { textColorMode, borderColorMode } = useColorModeTheme();

  return (
    <Carousel.Root slideCount={BeyondScreenData.gallery.length} autoSize spacing="0.75rem" width="full">
      <Flex {...ContainerHoverStyle} direction="column" position="relative">
        {/* Header Section */}
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" gap="0.5rem">
            <Box fontSize="1.25rem">
              <LuFullscreen />
            </Box>
            <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
              {t("Beyond the Screen")}
            </Text>
          </Flex>

          {/* Navigation Controls */}
          <Box width="fit-content">
            <Carousel.Control gap="2">
              <Carousel.PrevTrigger asChild>
                <IconButton size="xs" variant="outline">
                  <LuChevronLeft />
                </IconButton>
              </Carousel.PrevTrigger>
              <Carousel.NextTrigger asChild>
                <IconButton size="xs" variant="outline">
                  <LuChevronRight />
                </IconButton>
              </Carousel.NextTrigger>
            </Carousel.Control>
          </Box>
        </Flex>

        {/* Content Section */}
        <Flex direction="column" gap="4">
          <Text color={textColorMode} fontSize="sm">
            {t(BeyondScreenData.description)}
          </Text>

          <Carousel.ItemGroup>
            {BeyondScreenData.gallery.map((item, index) => (
              <Carousel.Item key={index} index={index} snapAlign="start" width="auto">
                <Center width="240px" height="150px" rounded="lg" overflow="hidden" border="1px solid" borderColor={borderColorMode}>
                  <Image src={item} alt={`beyond_the_screen_${index}`} width="100%" height="100%" objectFit="cover" />
                </Center>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
        </Flex>
      </Flex>
    </Carousel.Root>
  );
};

export default BeyondScreenSection;
