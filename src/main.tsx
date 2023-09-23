import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./routes/Home.tsx";
import "./index.css";
import { Why } from "./routes/Why.tsx";

const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/why",
    element: <Why />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
