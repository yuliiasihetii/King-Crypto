import { Stack, Typography } from "@mui/material";
import { AchievementItemContainer } from "./styles";
import { useIsDesktop } from "@/hooks/is-desktop";

export const Achievement = () => {
  const isDesktop = useIsDesktop();
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      gap="40px"
      m="120px 0"
      flexDirection={!isDesktop ? "column" : "row"}
    >
      <AchievementItemContainer>
        <Typography variant="h4" fontWeight="regular" color="text.secondary">
          $ 5 359 800
        </Typography>
        <Typography align="center" color="black.dark">
          In three years of work, we have managed to protect clients from
          potential losses amounting
        </Typography>
      </AchievementItemContainer>

      <AchievementItemContainer>
        <Typography variant="h4" fontWeight="regular" color="text.secondary">
          6 500 000+
        </Typography>
        <Typography align="center" color="black.dark">
          crypto wallets linked to stolen or illicit funds
        </Typography>
      </AchievementItemContainer>

      <AchievementItemContainer bgcolor="text.secondary">
        <Typography variant="h1" fontWeight="regular" color="text.disabled">
          29%
        </Typography>
        <Typography align="center" color="black.dark">
          of all crypto wallets we have verified are deemed suspicious
        </Typography>
      </AchievementItemContainer>
    </Stack>
  );
};
