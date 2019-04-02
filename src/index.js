import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Counters />, document.getElementById("root"));
serviceWorker.unregister();
