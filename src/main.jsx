import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Routes from "./Components/Routes/Routes";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import AllApps from "./Components/AllApps/AllApps";
import Details from "./Components/Details/Details";
import Installation from "./Components/Installation/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Routes,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: AllApps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/details/:id",
        Component: Details,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
