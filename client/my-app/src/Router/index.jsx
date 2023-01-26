import {
    createBrowserRouter
  } from "react-router-dom";
import Add from "../Pages/Add";
import Details from "../Pages/Details";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/addpage",
        element: <Add/>,
      },
      {
        path: "/details/:id",
        element: <Details/>,
      }
  ]);

  export default router