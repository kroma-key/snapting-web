import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "./components/provider/theme-provider";
import { OverlayProvider } from "./hooks/use-overlay";

import "@stackflow/plugin-basic-ui/index.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <OverlayProvider>
        <Suspense>
          <App />
        </Suspense>
      </OverlayProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
