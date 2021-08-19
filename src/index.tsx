import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store/Store";
import { Application } from "./application/Application";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
