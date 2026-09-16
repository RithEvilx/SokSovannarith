import { useTranslation } from "react-i18next";
import { Box, Flex, Text } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/apps/styles/style";
// Icon
import { LuBriefcaseBusiness } from "react-icons/lu";
// Component
import TimelineComponent from "@/shared/ui/components/TimelineComponent";
// Data
import { WorkExperienceData } from "@/shared/data/WorkExperienceData";

const WorkExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <Flex {...ContainerHoverStyle} paddingBottom="0.25rem">
      {/* Header */}
      <Flex alignItems="center" gap="0.5rem">
        <Box fontSize={{ base: "1.25rem", md: "1.15rem" }}>
          <LuBriefcaseBusiness />
        </Box>
        <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
          {t("Work Experience")}
        </Text>
      </Flex>
      {/* Timeline */}
      <TimelineComponent data={WorkExperienceData} />
    </Flex>
  );
};

export default WorkExperienceSection;
