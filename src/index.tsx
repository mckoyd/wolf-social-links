import React from "react";
import { Root, createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./pages/App";

const router = createHashRouter([
  {
    path: "*",
    element: <App />,
  },
]);

const rootElement: HTMLElement = document.getElementById("root") as HTMLElement;
const root: Root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
