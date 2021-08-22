import { Reducer } from "redux";
import { ClockActions, ClockTypes } from "../types/ClockTypes";

export interface IClockState {
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly textHours: number;
  readonly textMinutes: number;
  readonly ampm : string;
}

const initialState: IClockState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  textHours : 0,
  textMinutes : 0,
  ampm : "",
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
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm;
      if(hours >= 12) {
        hours -= 12;
        ampm = "PM";
      } else {
        ampm = "AM";
      }
      if(hours === 0) { hours = 12;}
      return {
        hours: hh + mm / 12,
        minutes: mm,
        seconds: ss,
        textHours : hours,
        textMinutes : minutes,
        ampm : ampm,
      };
    }
    default: {
      return initialState;
    }
  }
};
