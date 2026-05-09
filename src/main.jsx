import * as ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/route.jsx";
import BackToTop from "./components/BackToTop/BackToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <BackToTop/>
  </React.StrictMode>,
);
