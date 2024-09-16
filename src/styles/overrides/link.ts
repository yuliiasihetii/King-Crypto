import { Components, Theme } from "@mui/material";

export const linkOverrides: Components<Theme>["MuiLink"] = {
  styleOverrides: {
    root: {
      textDecoration: "none",
    },
  },
};
