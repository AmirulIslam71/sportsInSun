import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto ">
    <HelmetProvider>
      <React.StrictMode>
        <RouterProvider router={Router}></RouterProvider>
      </React.StrictMode>
    </HelmetProvider>
  </div>
);
