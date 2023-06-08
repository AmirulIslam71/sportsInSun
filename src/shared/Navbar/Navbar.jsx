import { NavLink } from "react-router-dom";

const Navbar = () => {
  const option = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "green" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => {
            return {
              color: isActive ? "green" : "",
            };
          }}
        >
          Dashboard
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
          Instructor
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
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          style={({ isActive }) => {
            return {
              color: isActive ? "green" : "",
            };
          }}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "green" : "",
            };
          }}
        >
          <button>LogOut</button>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          style={({ isActive }) => {
            return {
              color: isActive ? "green" : "",
            };
          }}
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black bg-opacity-30 fixed z-10 container">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white"
          >
            {option}
          </ul>
        </div>
        <button>
          <img
            src="https://d2pyicwmjx3wii.cloudfront.net/s/5cd2eddf7a55e266abaee641/ms.settings/5256837ccc4abf1d39000001/webp/5d667a7a6b331879a86698d8-240x240.png"
            alt=""
            className="w-12 h-8 rounded"
          />
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl text-white">
          {option}
        </ul>
      </div>
      <div className="navbar-end">
        <button>Dark</button>
      </div>
    </div>
  );
};

export default Navbar;
