import { createUseStyles } from "react-jss";

export const useCircleStyles = createUseStyles({
  root: {
    position: "relative",
    width: "200px",
    height: "200px",
    background: "#fff",
    borderRadius: "50%",
    boxShadow:
      "-6px -6px 16px var(--white-color), 6px 6px 16px hsla(var(--hue-color), 30%, 86%, 1), inset 6px 6px 16px hsla(var(--hue-color), 30%, 86%, 1), inset -6px -6px 16px var(--white-color)",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
  },
});
