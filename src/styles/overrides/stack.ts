import { Components, Theme } from "@mui/material";

export const stackOverrides: Components<Theme>["MuiStack"] = {
  styleOverrides: {
    root: {
      flexDirection: "row",
    },
  },
};
