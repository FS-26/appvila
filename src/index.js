import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { Features } from "./components/features/features";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Features />
  </React.StrictMode>
);
