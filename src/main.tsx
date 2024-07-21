import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "normalize.css";
import "@seed-design/stylesheet/global.css";
import "@stackflow/plugin-basic-ui/index.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
