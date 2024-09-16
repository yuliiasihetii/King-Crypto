import { linkOverrides } from "./link";
import { buttonOverrides } from "./button";
import { stackOverrides } from "./stack";
export default {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        body3: "p",
      },
    },
  },
  MuiStack: {
    ...stackOverrides,
  },
  MuiButton: {
    ...buttonOverrides,
  },
  MuiLink: {
    ...linkOverrides,
  },
};
