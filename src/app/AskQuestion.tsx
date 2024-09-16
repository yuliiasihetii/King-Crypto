import { useIsDesktop } from "@/hooks/is-desktop";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export const AskQuestion = () => {
  const { openConnectModal } = useConnectModal();
  const isDesktop = useIsDesktop();
  return (
    <Box bgcolor="#3490fc26" padding="40px" mt="50px">
      <Stack
        maxWidth="900px"
        margin="0 auto"
        gap="50px"
        alignItems={isDesktop ? "center" : "flex-start"}
        justifyContent="space-between"
        flexDirection={!isDesktop ? "column" : "row"}
      >
        <Box>
          <Typography variant="h6" fontWeight="regular" color="text.secondary">
            Can't find your question?
          </Typography>
          <Typography
            variant="body2"
            maxWidth={600}
            color="black.dark"
            mt="12px"
          >
            The overall risk percentage represents the likelihood of an address
            being linked to illegal activities. This risk is determined based on
            the types of services the address has interacted with and the
            percentage of funds received or sent to these services.
          </Typography>
        </Box>
        <Button variant="contained" size="medium" onClick={openConnectModal}>
          Ask a question
        </Button>
      </Stack>
    </Box>
  );
};
