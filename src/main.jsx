import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const viteHint = document.getElementById("vite-run-hint");
if (viteHint) {
  viteHint.remove();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
