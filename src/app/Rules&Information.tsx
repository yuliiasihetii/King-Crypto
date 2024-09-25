import { Box, Typography } from "@mui/material";
import { rulesInformationData } from "./common";
import { RulesInformationContainer } from "./styles";
import { SectionRefs } from "@/hooks/use-scroll";
import { FC } from "react";

interface RulesInformationProps {
  sectionRefs: SectionRefs;
}

export const RulesInformation: FC<RulesInformationProps> = ({
  sectionRefs,
}) => {
  return (
    <Box
      ref={sectionRefs.Rules}
      bgcolor="#F5F5F5"
      padding="120px 20px"
      id="rules"
    >
      <Box>
        <Typography variant="h2" align="center" mb="60px">
          Rules & Information
        </Typography>
        <RulesInformationContainer>
          {rulesInformationData.map(({ title, text }, index) => (
            <Box
              key={index}
              bgcolor="background.default"
              p="40px"
              borderRadius="16px"
            >
              <Typography variant="h4" mb="20px">
                {title}
              </Typography>
              <Typography variant="h6" color="black.dark">
                {text}
              </Typography>
            </Box>
          ))}
        </RulesInformationContainer>
      </Box>
    </Box>
  );
};
