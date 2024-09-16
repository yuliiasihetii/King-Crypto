import { Box, Button, Stack, Typography } from "@mui/material";
import KYCImg from "@/assets/KYC.webp";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useIsDesktop } from "@/hooks/is-desktop";
import { useScrollStore } from "@/store/scrollStore";

export const KYC = () => {
  const { openConnectModal } = useConnectModal();
  const isDesktop = useIsDesktop();
  const { sectionRefs } = useScrollStore();
  return (
    <Box
      ref={sectionRefs.Info}
      maxWidth="1300px"
      margin="120px auto"
      px={isDesktop ? 0 : "10%"}
    >
      <Stack justifyContent="center" alignItems="center" gap="60px">
        {isDesktop && <img src={KYCImg} width="588px" />}

        <Box width="100%" mb="40px">
          <Typography variant="h2" color="text.primary">
            AML service: what is KYC crypto and AML checker for?
          </Typography>
          <Typography color="black.dark" mt="20px" mb="20px">
            KingCrypto AMLbot checks cryptocurrencies for money laundering,
            providing detailed reports. Ensure legal compliance and protect your
            crypto wallet against blocks and fraudsters.
          </Typography>
          <Typography variant="h5" color="text.primary">
            AML service: what is KYC crypto and AML checker for?
          </Typography>
          <Typography color="black.dark" my="20px">
            KingCrypto AMLbot checks cryptocurrencies for money laundering,
            providing detailed reports. Ensure legal compliance and protect your
            crypto wallet against blocks and fraudsters.
          </Typography>

          <Button size="large" variant="outlined" onClick={openConnectModal}>
            Check your wallet
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
