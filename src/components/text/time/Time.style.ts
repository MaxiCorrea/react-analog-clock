import { createUseStyles } from "react-jss";

export const useTimeStyles = createUseStyles({
  container: {
    display : "flex",
    justifyContent : "center",
  },
  hours: {
    fontSize : "var(--biggest-font-size)",
    fontWeight : "var(--font-medium)",
    color : "var(--title-color)",
  },
  minutes: {
    fontSize : "var(--biggest-font-size)",
    fontWeight : "var(--font-medium)",
    color : "var(--title-color)",
  },
  ampm: {
    fontSize : "var(--tiny-font-size)",
    color : "var(--title-color)",
    fontWeight : "var(--font-medium)",
    marginLeft : "var(--mn-0-25)",
  },
});
