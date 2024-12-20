import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./AppWrapper"; // Import the AppWrapper component

// Create a Context
export const Context = createContext({
  isAuthorized: false,
});

// Render the AppWrapper component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
