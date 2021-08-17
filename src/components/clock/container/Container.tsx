import * as React from "react";
import { useContainerStyles } from "./Container.style";

export const Container: React.FC = (props) => {
  const classes = useContainerStyles();
  return <section className={classes.root}>{props.children}</section>;
};
