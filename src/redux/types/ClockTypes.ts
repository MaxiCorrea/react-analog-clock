export enum ClockTypes {
  UPDATE_TIME = "CLOCK/UPDATE_TIME",
}

interface IUpdateTimeAction {
  type: ClockTypes.UPDATE_TIME;
  payload: Date;
}

export type ClockActions = IUpdateTimeAction;
