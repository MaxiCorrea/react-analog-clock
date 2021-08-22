import * as React from "react";
import { useTimeStyles } from "./Time.style";

interface ITimeProps {
  textHours: number;
  textMinutes: number;
  ampm: string;
}

export const Time: React.FC<ITimeProps> = (props) => {
  const classes = useTimeStyles();
  const formatterHours =
    props.textHours < 10 ? "0" + props.textHours + ":" : props.textHours + ":";
  const formatterMinutes =
    props.textMinutes < 10 ? "0" + props.textMinutes : props.textMinutes;
  return (
    <div className={classes.container}>
      <div className={classes.hours}>{formatterHours}</div>
      <div className={classes.minutes}>{formatterMinutes}</div>
      <div className={classes.ampm}>{props.ampm}</div>
    </div>
  );
};
