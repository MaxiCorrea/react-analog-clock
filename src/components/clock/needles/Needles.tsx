import * as React from "react";
import { useTimeStyles } from "./Needles.style";

interface Props {
  value: number;
}

export const NeedleHours: React.FC<Props> = (props) => {
  const classes = useTimeStyles();
  return (
    <span
      style={{ transform: "rotateZ(" + props.value + "deg)" }}
      className={classes.hours}
    ></span>
  );
};

export const NeedleMinutes: React.FC<Props> = (props) => {
  const classes = useTimeStyles();
  return (
    <span
      style={{ transform: "rotateZ(" + props.value + "deg)" }}
      className={classes.minutes}
    ></span>
  );
};

export const NeedleSeconds: React.FC<Props> = (props) => {
  const classes = useTimeStyles();
  return (
    <span
      style={{ transform: "rotateZ(" + props.value + "deg)" }}
      className={classes.seconds}
    ></span>
  );
};
