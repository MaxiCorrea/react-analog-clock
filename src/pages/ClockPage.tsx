import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IApplicationState } from "../redux/store/Store";
import { IClockState } from "../redux/reducers/ClockReducer";
import { Container } from "../components/clock/container/Container";
import { Circle } from "../components/clock/circle/Circle";
import { StickTwelve } from "../components/clock/sticks/Sticks";
import { StickThree } from "../components/clock/sticks/Sticks";
import { StickSix } from "../components/clock/sticks/Sticks";
import { StickNine } from "../components/clock/sticks/Sticks";
import { Axis } from "../components/clock/sticks/Sticks";
import { Hours, Minutes, Seconds } from "../components/clock/time/Time";
import { Footer } from "../components/footer/Footer";
import { updateTimeAction } from "../redux/actions/ClockActions";

export const ClockPage: React.FC = () => {

  const dispatch = useDispatch();

  const clockState = useSelector<
    IApplicationState, 
    IClockState
  >((state) => state.clockState);

  React.useEffect(() => {
    const id = setInterval(() => {
      dispatch(updateTimeAction())
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <>
      <Container>
        <Circle>
          <StickTwelve />
          <StickThree />
          <StickSix />
          <StickNine />
          <Axis />
          <Hours value={clockState.hours} />
          <Minutes value={clockState.minutes} />
          <Seconds value={clockState.seconds} />
        </Circle>
      </Container>
      <Footer />
    </>
  );
};
