import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../shared/ErrorPage/ErrorPage";
import Home from "../pages/HomePages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardMenu from "../pages/Dashboard/DashboardMenu/DashboardMenu";
import PrivateRoutes from "../providers/PrivateRoutes";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import StudentHome from "../pages/Dashboard/StudentDashboard/StudentHome";
import AdminHome from "../pages/Dashboard/AdminDashboard/AdminHome";
import InstructorHome from "../pages/Dashboard/InstructorDashboard/InstructorHome";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers";
import SelectClasses from "../pages/Dashboard/StudentDashboard/SelectClasses";

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
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
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
    children: [
      // student dashboard
      {
        path: "studentHome",
        element: <StudentHome></StudentHome>,
      },
      {
        path: "selectClass",
        element: <SelectClasses></SelectClasses>,
      },
      // admin dashboard
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      // instructor dashboard
      {
        path: "instructorHome",
        element: <InstructorHome></InstructorHome>,
      },
    ],
  },
]);
export default Router;
