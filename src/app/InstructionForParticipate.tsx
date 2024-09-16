import { Box, Stack, Typography } from "@mui/material";
import { instructionForParticipateData } from "./common";
import { InstructionContainer } from "./styles";
import { useIsDesktop } from "@/hooks/is-desktop";

export const InstructionForParticipate = () => {
  const isDesktop = useIsDesktop();
  return (
    <Box padding="150px 0">
      <Typography variant="h2" align="center" mb="40px">
        Instruction for participate
      </Typography>
      <Stack
        gap="20px"
        justifyContent="center"
        alignItems="center"
        flexDirection={!isDesktop ? "column" : "row"}
      >
        {instructionForParticipateData.map(
          ({ title, description, icon: Icon }, index) => (
            <InstructionContainer key={index}>
              <Icon style={{ width: 60, height: 60, color: "#1E90FF" }} />
              <Typography variant="h6" fontWeight="regular">
                {title}
              </Typography>
              <Typography color="black.dark">{description}</Typography>
            </InstructionContainer>
          )
        )}
      </Stack>
    </Box>
  );
};
