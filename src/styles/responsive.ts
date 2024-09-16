import { theme } from "./theme";

export const forDesktop = theme.breakpoints.up("lg");
export const forMobile = theme.breakpoints.down("sm");
export const forTablet = theme.breakpoints.between("sm", "md");
