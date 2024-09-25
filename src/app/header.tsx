import { Button, Link, Stack, Typography } from "@mui/material";
import { HeaderContainer } from "./styles";
import { headerLinks } from "./common";
import Logo from "@/assets/lego.png";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { FC } from "react";
import { useIsDesktop } from "@/hooks/is-desktop";

interface HeaderProps {
  scrollToSection: (sectionName: string) => void;
}

export const Header: FC<HeaderProps> = ({ scrollToSection }) => {
  const { openConnectModal } = useConnectModal();
  const isDesktop = useIsDesktop();
  return (
    <HeaderContainer bgcolor="background.default">
      <Stack gap="8px" alignItems="center">
        <img src={Logo} alt="logo" width="30px" />
        <Typography variant="h6" fontWeight="bold">
          King Crypto
        </Typography>
      </Stack>

      {isDesktop && (
        <Stack alignItems="center" gap="30px">
          {headerLinks.map(({ title }, index) => (
            <Link
              component="button"
              key={index}
              onClick={() => scrollToSection(title)}
            >
              <Typography
                variant="h6"
                fontWeight="regular"
                color="text.secondary"
              >
                {title}
              </Typography>
            </Link>
          ))}
        </Stack>
      )}
      <Button variant="contained" size="medium" onClick={openConnectModal}>
        Start Investing
      </Button>
    </HeaderContainer>
  );
};
