import { useIsDesktop } from "@/hooks/is-desktop";
import { useScrollStore } from "@/store/scrollStore";
import { Box, Button, Slider, Stack, Typography } from "@mui/material";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useState } from "react";

export const Receiving = () => {
  const { openConnectModal } = useConnectModal();
  const [amount, setAmount] = useState<number>(1000);
  const [timeframe, setTimeframe] = useState<number>(30);
  const isDesktop = useIsDesktop();
  const { sectionRefs } = useScrollStore();

  return (
    <Box
      ref={sectionRefs.Receiving}
      m="120px auto"
      maxWidth="1300px"
      id="receiving"
      padding="20px"
    >
      <Typography variant="h2" align="center" mb="50px">
        Receive with ADA Cardano Staking
      </Typography>
      <Stack
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection={!isDesktop ? "column" : "row"}
        gap="50px"
      >
        <Box>
          <Typography variant="h6" mb="10px">
            Select staking amount & timeframe
          </Typography>
          <Box>
            <Stack justifyContent="space-between" alignItems="center" mb="15px">
              <Typography>Amount ($)</Typography>
              <Box
                mt="10px"
                border="1px solid"
                p="2px 8px"
                borderRadius="12px"
                width="150px"
              >
                <Typography variant="h6" align="center">
                  $ {amount.toLocaleString()}
                </Typography>
              </Box>
            </Stack>
            <Slider
              value={amount}
              min={1000}
              max={10000000}
              step={1000}
              onChange={(e, value) => setAmount(value as number)}
              aria-labelledby="staking-amount-slider"
            />
          </Box>
          <Box mt="40px">
            <Stack justifyContent="space-between" alignItems="center" mb="15px">
              <Typography>Timeframe (days)</Typography>
              <Box
                mt="10px"
                border="1px solid"
                p="2px 8px"
                borderRadius="12px"
                width="150px"
              >
                <Typography variant="h6" align="center">
                  {timeframe} days
                </Typography>
              </Box>
            </Stack>
            <Slider
              value={timeframe}
              min={1}
              max={90}
              step={1}
              onChange={(e, value) => setTimeframe(value as number)}
              aria-labelledby="staking-timeframe-slider"
            />
          </Box>
          <Typography variant="body2" mt="5px" color="textSecondary">
            Numbers are simulated based on Cardano average returns.
          </Typography>
        </Box>
        <Stack
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3" mb="30px">
            Expected Return
          </Typography>
          <Button variant="contained" size="large" onClick={openConnectModal}>
            <Typography variant="h5" color="text.disabled">
              $ {(amount * 0.011 * timeframe)?.toFixed(0)}
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
