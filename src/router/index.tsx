import PageLayout from "../layout/index";
import { createBrowserRouter, Navigate } from "react-router-dom";
import childRoutes from "./routes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/overview/home"}></Navigate>,
  },
  {
    path: "/",
    element: <PageLayout></PageLayout>,
    children: childRoutes,
  },
  {
    path: "*",
    element: <Navigate to={"/overview/home"}></Navigate>,
  },
]);

export default routes;
