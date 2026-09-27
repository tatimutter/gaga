import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Bootstrap CSS di base (grid, componenti) - va installato con: npm install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS (necessario per navbar mobile, accordion, offcanvas)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento #root non trovato in index.html");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
