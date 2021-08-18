import { createUseStyles } from "react-jss";

export const useCopyrightStyles = createUseStyles({
  root: {
    fontFamily: "Poppins",
    fontSize: "var(--smaller-font-size)",
    fontWeight: "var(--font-medium)",
    color: "var(--text-color-light)",
    transition: ".3s",
    "&:hover": {
      color: "var(--first-color)",
    },
  },
});
