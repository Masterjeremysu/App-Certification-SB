import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Recherche du conteneur racine dans le DOM
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Élément #root introuvable dans index.html");
}

// Démarrage de l'application avec React 18+
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
