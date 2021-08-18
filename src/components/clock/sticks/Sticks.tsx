import * as React from "react";
import { useSticksStyles } from "./Sticks.style";

export const StickTwelve: React.FC = () => {
  const classes = useSticksStyles();
  return <span className={classes.twelve}></span>;
};

export const StickThree: React.FC = () => {
  const classes = useSticksStyles();
  return <span className={classes.three}></span>;
};

export const StickSix: React.FC = () => {
  const classes = useSticksStyles();
  return <span className={classes.six}></span>;
};

export const StickNine: React.FC = () => {
  const classes = useSticksStyles();
  return <span className={classes.nine}></span>;
};

export const Axis: React.FC = () => {
  const classes = useSticksStyles();
  return <span className={classes.axis}></span>;
};
