import * as React from "react";
import { useTimeStyles } from "./Time.style";

export const Hours: React.FC = () => {
  const classes = useTimeStyles();
  return <span className={classes.hours}></span>;
};

export const Minutes: React.FC = () => {
  const classes = useTimeStyles();
  return <span className={classes.minutes}></span>;
};

export const Seconds: React.FC = () => {
  const classes = useTimeStyles();
  return <span className={classes.seconds}></span>;
};
