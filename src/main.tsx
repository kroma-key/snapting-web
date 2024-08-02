import { Theme as RadixThemeProvider } from "@radix-ui/themes";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "./components/provider/theme-provider";
import { OverlayProvider } from "./hooks/use-overlay";

import "@stackflow/plugin-basic-ui/index.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "@radix-ui/themes/styles.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RadixThemeProvider>
        <OverlayProvider>
          <Suspense>
            <App />
          </Suspense>
        </OverlayProvider>
      </RadixThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
