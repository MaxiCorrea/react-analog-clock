import * as React from "react";
import { Container } from "../components/clock/container/Container";
import { Circle } from "../components/clock/circle/Circle";
import { StickTwelve } from "../components/clock/sticks/Sticks";
import { StickThree } from "../components/clock/sticks/Sticks";
import { StickSix } from "../components/clock/sticks/Sticks";
import { StickNine } from "../components/clock/sticks/Sticks";
import { Axis } from "../components/clock/sticks/Sticks";
import { Hours, Minutes , Seconds } from "../components/clock/time/Time";
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
          <Axis/>
          <Hours/>
          <Minutes/>
          <Seconds/>
        </Circle>
      </Container>
      <Footer />
    </>
  );
};
