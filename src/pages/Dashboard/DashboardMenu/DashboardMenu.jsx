import {
  FaBook,
  FaBookOpen,
  FaBookmark,
  FaGoogleWallet,
  FaHome,
  FaPeopleArrows,
  FaPeopleCarry,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useSelect from "../../../hooks/useSelect";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const DashboardMenu = () => {
  const [selectedClass] = useSelect();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

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
        <ul className="menu p-2 w-60 h-full uppercase mt-4">
          {/* Sidebar content here */}
          {(isAdmin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "green" : "",
                    };
                  }}
                >
                  <FaHome></FaHome>admin home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allUsers"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "green" : "",
                    };
                  }}
                >
                  <FaUserAlt></FaUserAlt> all users
                </NavLink>
              </li>
            </>
          )) ||
            (isInstructor && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/instructorHome"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "green" : "",
                      };
                    }}
                  >
                    <FaHome></FaHome>instructor home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addClass"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "green" : "",
                      };
                    }}
                  >
                    <FaBookOpen></FaBookOpen> Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/MyClass"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "green" : "",
                      };
                    }}
                  >
                    <FaBook></FaBook>My Class
                  </NavLink>
                </li>
              </>
            )) || (
              <>
                <li>
                  <NavLink
                    to="/dashboard/studentHome"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "green" : "",
                      };
                    }}
                  >
                    <FaHome></FaHome>student home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/selectClass"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "green" : "",
                      };
                    }}
                  >
                    <FaBookmark></FaBookmark> Select Classes
                    <div className="badge badge-secondary space-x-0">
                      {selectedClass.length}
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payment"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "green" : "",
                      };
                    }}
                  >
                    <FaGoogleWallet></FaGoogleWallet> Payment
                  </NavLink>
                </li>
              </>
            )}

          {/* main nav bar start  */}
          <div className="w-10/12 mx-auto my-10">
            <hr />
          </div>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "green" : "",
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
                  color: isActive ? "green" : "",
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
                  color: isActive ? "green" : "",
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
