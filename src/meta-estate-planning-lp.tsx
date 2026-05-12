import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FrameMeta } from "./screens/FrameMeta";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FrameMeta />
  </StrictMode>,
);
