import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
);
