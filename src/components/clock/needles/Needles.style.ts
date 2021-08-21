import { createUseStyles } from "react-jss";

export const useTimeStyles = createUseStyles({
  hours: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "105px",
    height: "105px",
    "&:before": {
      content: '""',
      position: "absolute",
      backgroundColor: "var(--text-color)",
      width: ".25rem",
      height: "3rem",
      borderRadius: ".75rem",
      zIndex: "var(--z-normal)",
    },
  },
  minutes: {
    position: "absolute",
    width: "136px",
    height: "136px",
    display: "flex",
    justifyContent: "center",
    "&:before": {
      content: '""',
      position: "absolute",
      backgroundColor: "var(--text-color)",
      width: ".25rem",
      height: "4rem",
      borderRadius: ".75rem",
      zIndex: "var(--z-normal)",
    },
  },
  seconds: {
    position: "absolute",
    width: "130px",
    height: "130px",
    display: "flex",
    justifyContent: "center",
    "&:before": {
      content: '""',
      position: "absolute",
      backgroundColor: "var(--first-color)",
      width: ".125rem",
      height: "5rem",
      borderRadius: ".75rem",
      zIndex: "var(--z-normal)",
    },
  },
});
