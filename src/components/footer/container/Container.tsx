import * as React from "react";
import { useContainerStyles } from "./Container.style";

export const Container: React.FC = (props) => {
  const classes = useContainerStyles();
  return <div className={classes.root}>{props.children}</div>;
};
