import thunk from "redux-thunk";

import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
  compose,
} from "redux";

import { ClockReducer, IClockState } from "../reducers/ClockReducer";

export interface IApplicationState {
  clockState: IClockState;
}

const rootReducer = combineReducers<IApplicationState>({
  clockState: ClockReducer,
});

export default function configureStore(): Store<IApplicationState> {
  return createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : compose
    )
  );
}
