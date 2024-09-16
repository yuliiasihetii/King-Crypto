import { Components, Theme } from "@mui/material";

export const buttonOverrides: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: "initial",
      color: theme.palette.background.secondary,
      border: `1px solid ${theme.palette.background.secondary}`,
      borderRadius: 12,
      fontWeight: "regular",
    }),
    sizeMedium: {
      height: 40,
      width: "max-content",
    },
    sizeLarge: {
      height: 58,
      width: 200,
    },
    contained: ({ theme }) => ({
      color: theme.palette.text.disabled,
      backgroundColor: theme.palette.background.secondary,
      boxShadow: "none",
    }),

    text: {
      backgroundColor: "transparent",
      boxShadow: "none",
      borderColor: "transparent",
      color: "inherit",
      "&:hover": {
        borderColor: "transparent",
      },
    },
  },
};
