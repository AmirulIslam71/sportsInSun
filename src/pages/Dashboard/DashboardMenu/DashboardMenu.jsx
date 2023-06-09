import { FaHome, FaPeopleArrows, FaPeopleCarry } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side  bg-gradient-to-t from-slate-700 to-red-900 text-white pt-3">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <h2 className="pl-6 text-2xl uppercase">
          Sp<span className="text-orange-400 text-3xl">o</span>rts{" "}
          <span className="text-black">in</span> S
          <span className="text-orange-400 text-3xl">un</span>
        </h2>
        <ul className="menu p-2 w-60 h-full uppercase">
          {/* Sidebar content here */}

          <li>
            <NavLink
              to="/dashboard/adminHome"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                };
              }}
            >
              <FaHome></FaHome>admin home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/studentHome"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                };
              }}
            >
              <FaHome></FaHome>student home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/instructorHome"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                };
              }}
            >
              <FaHome></FaHome>instructor home
            </NavLink>
          </li>
          <div className="w-10/12 mx-auto my-10">
            <hr />
          </div>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                };
              }}
            >
              <FaHome></FaHome>home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructor"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                };
              }}
            >
              <FaPeopleArrows></FaPeopleArrows> Instructor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                };
              }}
            >
              <FaPeopleCarry></FaPeopleCarry> classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardMenu;
