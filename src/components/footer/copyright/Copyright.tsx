import * as React from "react";
import { useCopyrightStyles } from "./Copyright.style";

export const Copyright: React.FC = () => {
  const classes = useCopyrightStyles();
  return (
    <div className={classes.root}>
      &copy;Copyright {new Date().getFullYear()} developing by Maximiliano
      Correa
    </div>
  );
};
