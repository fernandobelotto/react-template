import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RootProvider } from "./providers/root.tsx";
import { AppRoutes } from "./routes/app-routes.tsx";

const element = document.getElementById("root");
if (element) {
  createRoot(element).render(
    <StrictMode>
      <RootProvider>
        <AppRoutes />
      </RootProvider>
    </StrictMode>
  );
} else {
  throw new Error("No root element found");
}
