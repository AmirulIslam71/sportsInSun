import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto ">
    <HelmetProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={Router}></RouterProvider>
          </AuthProvider>
        </QueryClientProvider>
      </React.StrictMode>
    </HelmetProvider>
  </div>
);
