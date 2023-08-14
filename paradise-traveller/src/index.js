import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <App />
    {/* <FooterPage /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
