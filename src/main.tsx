import "@/apps/styles/index.css";
import App from "@/apps/App.tsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./apps/providers/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
