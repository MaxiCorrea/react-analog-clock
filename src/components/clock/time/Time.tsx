import * as React from "react";
import { useTimeStyles } from "./Time.style";

interface Props {
  value: number;
}

export const Hours: React.FC<Props> = (props) => {
  const classes = useTimeStyles();
  return (
    <span
      style={{ transform: "rotateZ(" + props.value + "deg)" }}
      className={classes.hours}
    ></span>
  );
};

export const Minutes: React.FC<Props> = (props) => {
  const classes = useTimeStyles();
  return (
    <span
      style={{ transform: "rotateZ(" + props.value + "deg)" }}
      className={classes.minutes}
    ></span>
  );
};

export const Seconds: React.FC<Props> = (props) => {
  const classes = useTimeStyles();
  return (
    <span
      style={{ transform: "rotateZ(" + props.value + "deg)" }}
      className={classes.seconds}
    ></span>
  );
};
