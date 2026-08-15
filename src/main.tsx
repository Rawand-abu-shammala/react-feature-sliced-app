import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "@/app/App";

import {
  ErrorBoundary,
  StoreProvider,
  ThemeProvider,
  ToastProvider,
} from "./app/providers";

import "@/shared/config/i18n/i18n";
import "@/app/styles/index.scss";

async function bootstrap() {
  // Enable MSW mocking for the client environment
  if (import.meta.env.VITE_PROJECT_ENV === "client") {
    try {
      const { setupDevMocking } = await import("./mocks/devMocking");

      setupDevMocking();

      // eslint-disable-next-line no-console
      console.info("Dev mocking enabled");
    } catch (mockError) {
      // eslint-disable-next-line no-console
      console.warn("Dev mocking failed:", mockError);
    }

    try {
      const { worker } = await import("./mocks/browser");

      await worker.start({
        serviceWorker: {
          url: "/mockServiceWorker.js",
        },
        onUnhandledRequest: "bypass",
      });

      // eslint-disable-next-line no-console
      console.info("MSW worker started");
    } catch (error) {
      // Do not block app start if MSW fails
      // eslint-disable-next-line no-console
      console.warn("MSW worker failed to start:", error);
    }
  }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <StoreProvider>
        <BrowserRouter>
          <ThemeProvider>
            <ErrorBoundary>
              <ToastProvider />
              <App />
            </ErrorBoundary>
          </ThemeProvider>
        </BrowserRouter>
      </StoreProvider>
    </StrictMode>
  );
}

void bootstrap();