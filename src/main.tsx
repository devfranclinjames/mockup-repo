import { StrictMode } from "react";
import "./assets/custom/custom.css";

import App from "./App.tsx";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
