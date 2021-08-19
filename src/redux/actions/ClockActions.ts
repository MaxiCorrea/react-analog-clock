import { ThunkAction } from "redux-thunk";
import { ActionCreator, Dispatch } from "redux";
import { IClockState } from "../reducers/ClockReducer";
import { ClockActions, ClockTypes } from "../types/ClockTypes";

export const updateTimeAction: ActionCreator<
  ThunkAction<Promise<void>, IClockState, null, ClockActions>
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ClockTypes.UPDATE_TIME, payload: new Date() });
  };
};
