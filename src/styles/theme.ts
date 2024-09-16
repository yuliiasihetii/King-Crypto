import { colors } from "./colors";
import { createTheme } from "@mui/material";
import { typographyOverrides } from "./overrides/typography";
import components from "./overrides/index.ts";

export const theme = createTheme({
  palette: { ...colors },
  typography: typographyOverrides,
  components,
});
