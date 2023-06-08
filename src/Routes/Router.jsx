import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../shared/ErrorPage/ErrorPage";
import Home from "../pages/HomePages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardMenu from "../pages/Dashboard/DashboardMenu/DashboardMenu";
import PrivateRoutes from "../providers/PrivateRoutes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardMenu></DashboardMenu>
      </PrivateRoutes>
    ),
  },
]);
export default Router;
