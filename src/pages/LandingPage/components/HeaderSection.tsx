import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useColorMode } from "@/apps/providers/color-mode";
import { Box, Button, Flex, Group, Heading, Image, Span, Text, useBreakpointValue } from "@chakra-ui/react";
// Images
import Love from "/imgs/love.png";
// Style
import { useColorModeTheme } from "@/apps/styles/style";
// Icons
import { LuFileSpreadsheet, LuMail, LuMapPin, LuMoon, LuSun } from "react-icons/lu";
// Data
import { ProfileData } from "@/shared/data/ProfileData";
// Constants
import { ProfileImage, ProfileImageAwake, ProfileImageSleep, ProfileImageSmile } from "@/apps/configs/app";

const HeaderSection = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const { bgColorMode, textColorMode } = useColorModeTheme();

  // Reset clicked state after 3 seconds
  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isClicked]);

  const currentLng = i18n.language;

  const handleChangeLanguage = (next: "en" | "kh") => {
    i18n.changeLanguage(next);
    localStorage.setItem("language", next);
  };

  // Only apply click behavior on mobile/md, not on lg
  const isMobileOrMd = useBreakpointValue({ base: true, md: true, lg: false });

  const mailTo = `mailto:${ProfileData.email}?subject=Inquiry from Portfolio&body=Dear Mr. ${ProfileData.name},%0D%0A%0D%0AI saw your portfolio and would like to chat about...%0D%0A%0D%0ABest regards,`;

  const handleNavigateResume = () => {
    navigate("/resume");
  };

  return (
    <Flex direction="column" gap="1rem" marginBottom={{ base: "2rem", lg: "3rem" }}>
      <Flex alignItems="center" gap={{ base: "1rem", lg: "1.75rem" }}>
        {/* Profile */}
        <Box
          width={{ base: "100px", md: "150px", lg: "150px" }}
          height={{ base: "100px", md: "150px", lg: "150px" }}
          minWidth={{ base: "100px", md: "150px", lg: "150px" }}
          minHeight={{ base: "100px", md: "150px", lg: "150px" }}
          rounded="lg"
          border="1px solid"
          borderColor={colorMode === "dark" ? "borderColorForDark" : "borderColorForLight"}
          overflow="hidden"
          // Desktop Hover handlers
          onMouseEnter={() => !isMobileOrMd && setIsHovered(true)}
          onMouseLeave={() => !isMobileOrMd && setIsHovered(false)}
          // Mobile Click handler
          onClick={() => {
            if (isMobileOrMd) {
              setIsClicked(true);
            }
          }}
          cursor="pointer"
          // Optional: Visual feedback while pressing
          _active={{ opacity: 0.8 }}
        >
          <Image
            src={
              // If we are actively in a 'clicked' state (timer running)
              // OR we are hovering on desktop...
              isClicked || isHovered
                ? colorMode === "dark"
                  ? ProfileImageAwake
                  : ProfileImageSmile
                : colorMode === "dark"
                  ? ProfileImageSleep
                  : ProfileImage
            }
            alt="Handsome Boy!"
            loading="lazy"
            width="100%"
            height="100%"
            objectFit="cover"
            transition="all 0.3s linear"
          />
        </Box>
        {/* Info */}
        <Flex direction="column" justifyContent="space-between" width="100%">
          {/* Name */}
          <Flex alignItems="flex-start" justifyContent="space-between" gap="0.5rem">
            <Heading fontSize={{ base: "lg", md: "xl", lg: "2xl" }} position="relative" width="fit-content">
              {t(`${ProfileData.name}`)}
              <Box boxSize="25px" position="absolute" top="-1rem" right="-1rem">
                <Image src={Love} alt="Love" loading="lazy" width="100%" height="100%" />
              </Box>
            </Heading>
            {/* Toggle Theme */}
            <Button variant="outline" onClick={toggleColorMode} rounded="lg" size={{ base: "xs", lg: "sm" }}>
              {colorMode === "dark" ? <LuMoon /> : <LuSun />}
            </Button>
          </Flex>
          {/* Location */}
          <Flex alignItems="center" gap="0.35rem" fontSize="xs" color="secondaryTextColor">
            <Span>
              <LuMapPin />
            </Span>
            <Text>{t(`${ProfileData.location}`)}</Text>
          </Flex>
          {/* Role */}
          <Text fontWeight="semibold" marginBlock={{ base: "0.45rem 0.25rem", md: "0.35rem" }} fontSize={{ base: "sm", md: "md" }}>
            {t(`${ProfileData.role}`)}
          </Text>
          {/* Actions Button - Table & Desktop */}
          <Flex gap="0.5rem" display={{ base: "none", md: "flex" }}>
            {/* View Resume */}
            <Button
              paddingInline="1rem"
              alignItems="center"
              variant="outline"
              _hover={{ bgColor: bgColorMode, color: textColorMode, transform: "translateY(-3px)" }}
              transition="all 0.3s"
              rounded="md"
              onClick={handleNavigateResume}
            >
              <LuFileSpreadsheet />
              <Text lineHeight={1} fontWeight="semibold">
                {t("View Resume")}
              </Text>
            </Button>
            {/* Send Email */}
            <a href={mailTo}>
              <Button
                paddingInline="1rem"
                alignItems="center"
                variant="outline"
                _hover={{ bgColor: bgColorMode, color: textColorMode, transform: "translateY(-3px)" }}
                transition="all 0.3s"
                rounded="md"
              >
                <LuMail />
                <Text lineHeight={1} fontWeight="semibold">
                  {t("Send Email")}
                </Text>
              </Button>
            </a>
            {/* Language Switcher */}
            <Group attached rounded="lg">
              <Button
                variant="outline"
                fontWeight="semibold"
                onClick={() => handleChangeLanguage("kh")}
                bgColor={currentLng === "kh" ? bgColorMode : undefined}
                color={currentLng === "kh" ? textColorMode : undefined}
                _hover={{ transform: "translateY(-3px)" }}
                _active={{ transform: "translateY(-3px)" }}
              >
                {t("KH")}
              </Button>

              <Button
                variant="outline"
                fontWeight="semibold"
                onClick={() => handleChangeLanguage("en")}
                bgColor={currentLng === "en" ? bgColorMode : undefined}
                color={currentLng === "en" ? textColorMode : undefined}
                _hover={{ transform: "translateY(-3px)" }}
                _active={{ transform: "translateY(-3px)" }}
              >
                {t("EN")}
              </Button>
            </Group>
          </Flex>
        </Flex>
      </Flex>
      {/* Actions Button - Mobile */}
      <Flex gap="0.5rem" display={{ base: "flex", md: "none" }}>
        {/* View Resume */}
        <Button
          paddingInline="1rem"
          alignItems="center"
          variant="outline"
          _hover={{ bgColor: bgColorMode, color: textColorMode, transform: "translateY(-3px)" }}
          _active={{ bgColor: bgColorMode, color: textColorMode, transform: "translateY(-3px)" }}
          transition="all 0.3s"
          rounded="md"
          size="xs"
          onClick={handleNavigateResume}
        >
          <LuFileSpreadsheet />
          <Text lineHeight={1} fontWeight="semibold">
            {t("View Resume")}
          </Text>
        </Button>
        {/* Send Email */}
        <a href={mailTo}>
          <Button
            paddingInline="1rem"
            alignItems="center"
            variant="outline"
            _hover={{ bgColor: bgColorMode, color: textColorMode, transform: "translateY(-3px)" }}
            _active={{ bgColor: bgColorMode, color: textColorMode, transform: "translateY(-3px)" }}
            transition="all 0.3s"
            rounded="md"
            size="xs"
          >
            <LuMail />
            <Text lineHeight={1} fontWeight="semibold">
              {t("Send Email")}
            </Text>
          </Button>
        </a>
        {/* Language Switcher */}
        <Group attached rounded="lg">
          <Button
            variant="outline"
            fontWeight="semibold"
            onClick={() => handleChangeLanguage("kh")}
            bgColor={currentLng === "kh" ? bgColorMode : undefined}
            color={currentLng === "kh" ? textColorMode : undefined}
            size="xs"
            _hover={{ transform: "translateY(-3px)" }}
            _active={{ transform: "translateY(-3px)" }}
            transition="all 0.3s"
          >
            {t("KH")}
          </Button>

          <Button
            variant="outline"
            onClick={() => handleChangeLanguage("en")}
            bgColor={currentLng === "en" ? bgColorMode : undefined}
            color={currentLng === "en" ? textColorMode : undefined}
            size="xs"
            _hover={{ transform: "translateY(-3px)" }}
            _active={{ transform: "translateY(-3px)" }}
          >
            {t("EN")}
          </Button>
        </Group>
      </Flex>
    </Flex>
  );
};

export default HeaderSection;
