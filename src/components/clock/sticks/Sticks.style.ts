import { createUseStyles } from "react-jss";

export const useSticksStyles = createUseStyles({
  twelve: {
    position: "absolute",
    width: "1rem",
    height: "1px",
    backgroundColor: "var(--text-color-light)",
    transform: "translateX(-50%) rotate(90deg)",
    top: "1.5rem",
    left: "50%",
  },
  six: {
    position: "absolute",
    width: "1rem",
    height: "1px",
    backgroundColor: "var(--text-color-light)",
    transform: "translateX(-50%) rotate(90deg)",
    bottom: "1.25rem",
    left: "50%",
  },
  three: {
    position: "absolute",
    width: "1rem",
    height: "1px",
    backgroundColor: "var(--text-color-light)",
    top: "50%",
    right: ".75rem",
  },
  nine: {
    position: "absolute",
    width: "1rem",
    height: "1px",
    backgroundColor: "var(--text-color-light)",
    left: ".75rem",
    top: "50%",
  },
  axis: {
    width: ".75rem",
    height: ".75rem",
    backgroundColor: "var(--first-color)",
    borderRadius: "50%",
    border: "2px solid var(--body-color)",
    zIndex: "var(--z-tooltip)",
  },
});
