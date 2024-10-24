import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Thakshala from "./Thakshala.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Thakshala />
  </StrictMode>
);
