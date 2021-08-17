import * as React from "react";
import { useFooterStyles } from "./Footer.style";
import { Container } from "./container/Container";
import { Copyright } from "./copyright/Copyright";

export const Footer: React.FC = () => {
  const classes = useFooterStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Copyright />
      </Container>
    </footer>
  );
};
