import React from "react";
import { render } from "react-dom";

import App from "./App";

import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Root = () => (
  <div style={styles}>
    <App />
  </div>
);

render(<Root />, document.getElementById("root"));
