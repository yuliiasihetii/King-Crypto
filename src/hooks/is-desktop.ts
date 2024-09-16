import { useMediaQuery } from "@mui/material";

import { forDesktop } from "@/styles/responsive";

export const useIsDesktop = (): boolean => {
  const isDesktop = useMediaQuery(forDesktop);

  return isDesktop;
};
