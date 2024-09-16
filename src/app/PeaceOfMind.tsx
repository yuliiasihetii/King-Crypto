import { Box, Button, Stack, Typography } from "@mui/material";
import Icon from "@/assets/peace-of-mind.webp";
import { PeaceOfMindContainer } from "./styles";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useIsDesktop } from "@/hooks/is-desktop";

export const PeaceOfMind = () => {
  const { openConnectModal } = useConnectModal();
  const isDesktop = useIsDesktop();
  return (
    <PeaceOfMindContainer bgcolor="background.primary">
      <Box>
        <Typography color="text.disabled" variant="h2">
          What is the price of your peace of mind?
        </Typography>
        <Stack alignItems="flex-end" gap="5px" mt="20px" mb="40px">
          <Typography color="text.disabled" variant="h2">
            0.2$
          </Typography>
          <Typography color="text.disabled" mb="8px">
            after ten free checks
          </Typography>
        </Stack>
        <Button variant="contained" size="large" onClick={openConnectModal}>
          Check your wallet
        </Button>
      </Box>
      <img src={Icon} alt="Peace of mind" width={isDesktop ? "50%" : "70%"} />
    </PeaceOfMindContainer>
  );
};
