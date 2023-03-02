import { RouterProvider } from "react-router-dom";
import routes from "./router";
import "./App.css";

export default () => {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
};
