import React from "react";
import { render } from "react-dom";
import ReactGA from "react-ga";
import App from "./App";
import "./style.css";

ReactGA.initialize("UA-104473382-2");
ReactGA.pageview(window.location.pathname + window.location.search);

render(<App />, document.getElementById("root"));
