import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { Application } from "./application/Application";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
