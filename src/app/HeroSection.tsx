import { Box, Button, Stack, Typography } from "@mui/material";
import { Header } from "./header";
import Hero from "@/assets/hero.webp";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { FC } from "react";
import { useIsDesktop } from "@/hooks/is-desktop";

interface HeroSectionProps {
  scrollToSection: (sectionName: string) => void;
}

export const HeroSection: FC<HeroSectionProps> = ({ scrollToSection }) => {
  const { openConnectModal } = useConnectModal();
  const isDesktop = useIsDesktop();
  return (
    <Box bgcolor="background.primary" pt="20px">
      <Header scrollToSection={scrollToSection} />
      <Box p="100px 20px" maxWidth="1300px" margin="0 auto">
        <Stack
          flexDirection={!isDesktop ? "column-reverse" : "row"}
          justifyContent="space-between"
          alignItems="center"
          gap="60px"
        >
          <Box maxWidth="430px" width="100%">
            <Typography variant="h1" color="text.disabled">
              AML service: what is KYC crypto and AML checker for?
            </Typography>
            <Typography color="text.disabled" mt="20px">
              KingCrypto AMLbot checks cryptocurrencies for money laundering,
              providing detailed reports. Ensure legal compliance and protect
              your crypto wallet against blocks and fraudsters.
            </Typography>
            <Stack
              gap="20px"
              mt="40px"
              flexDirection={!isDesktop ? "column" : "row"}
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                onClick={openConnectModal}
              >
                Check your wallet
              </Button>
              <Button size="large" onClick={openConnectModal}>
                Dashboard
              </Button>
            </Stack>
          </Box>

          <img src={Hero} width={isDesktop ? "50%" : "80%"} />
        </Stack>
      </Box>
    </Box>
  );
};
