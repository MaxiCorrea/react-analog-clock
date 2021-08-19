import { Reducer } from "redux";
import { ClockActions, ClockTypes } from "../types/ClockTypes";

export interface IClockState {
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
}

const initialState: IClockState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const ClockReducer: Reducer<IClockState, ClockActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ClockTypes.UPDATE_TIME: {
      let date = action.payload;
      let hh = date.getHours() * 30;
      let mm = date.getMinutes() * 6;
      let ss = date.getSeconds() * 6;
      return {
        hours: hh + mm / 12,
        minutes: mm,
        seconds: ss,
      };
    }
    default: {
      return initialState;
    }
  }
};
