import type { Palette } from "@mui/material/styles";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const typographyValues: React.CSSProperties = {
  fontFamily: "DM Sans, system-ui",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: "-0.03em",
};

export const typographyOverrides = (palette: Palette): TypographyOptions => ({
  allVariants: { ...typographyValues, color: palette.text.primary },
  fontWeightBold: 900,
  fontWeightRegular: 700,
  fontWeightMedium: 500,
  fontWeightLight: 400,
  h1: { fontSize: 40, fontWeight: 700 },
  h2: { fontSize: 36, fontWeight: 700 },
  h3: { fontSize: 32, fontWeight: 700 },
  h4: { fontSize: 28, fontWeight: 700 },
  h5: { fontSize: 24, fontWeight: 700 },
  h6: { fontSize: 20, fontWeight: 500 },
  subtitle1: { fontSize: 18, fontWeight: 700 },
  body1: { fontSize: 16 },
  body2: { fontSize: 14 },
  body3: { fontSize: 12 },
  body4: { fontSize: 10 },
});
