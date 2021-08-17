import * as React from "react";
import { Container } from "../components/clock/container/Container";
import { Circle } from "../components/clock/circle/Circle";
import { StickTwelve } from "../components/clock/sticks/Sticks";
import { StickThree } from "../components/clock/sticks/Sticks";
import { StickSix } from "../components/clock/sticks/Sticks";
import { StickNine } from "../components/clock/sticks/Sticks";
import { Footer } from "../components/footer/Footer";

export const ClockPage: React.FC = () => {
  return (
    <>
      <Container>
        <Circle>
          <StickTwelve/>
          <StickThree/>
          <StickSix/>
          <StickNine/>
        </Circle>
      </Container>
      <Footer />
    </>
  );
};
