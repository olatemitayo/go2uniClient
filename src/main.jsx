import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App";
import "./index.css";
import { Blog, Landing, Landingout, Register, Signin, Subject } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "landingout",
    element: <Landingout />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "subject",
    element: <Subject />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
