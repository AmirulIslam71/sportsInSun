import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

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
      {user ? (
        <li>
          <button onClick={handleLogOut}>Log Out</button>
        </li>
      ) : (
        <li>
          <NavLink
            to="/login"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "white",
              };
            }}
          >
            Log In
          </NavLink>
        </li>
      )}
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
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-xl text-white">
          {option}
        </ul>
      </div>
      {user && (
        <div
          className="tooltip tooltip-bottom ml-2"
          data-tip={user?.displayName}
        >
          <div className="avatar online h-12 w-12 items-center">
            <div className=" rounded-full">
              <img
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://i.ibb.co/wSkvRbb/pngtree-user-vector-avatar-png-image-1541962.jpg"
                }
              />
            </div>
          </div>
        </div>
      )}
      <div className="ml-8">
        <button>Dark</button>
      </div>
    </div>
  );
};

export default Navbar;
