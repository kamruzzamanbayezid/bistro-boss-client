import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import UserProfile from "../../Ui/UserProfile";
import ItemCart from "../../Ui/ItemCart";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const apiHandler = UseAxiosPublic();

  const handleLogout = () => {
    logOut()
      .then(async () => {
        console.log("User logged out successfully");
        const response = await apiHandler.post(
          "/logout",
          {},
          {
            withCredentials: true,
          }
        );
        console.log(response);
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  const navLinks = (
    <>
      <li className="text-lg font-medium">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#EEFF25" : "#FFF",
          })}
        >
          Home
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          to="/contactUs"
          style={({ isActive }) => ({
            color: isActive ? "#EEFF25" : "#FFF",
          })}
        >
          Contact us
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            color: isActive ? "#EEFF25" : "#FFF",
          })}
        >
          Dashboard
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          to="/our-menu"
          style={({ isActive }) => ({
            color: isActive ? "#EEFF25" : "#FFF",
          })}
        >
          Our Menu
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          to="/our-shop/salads"
          style={({ isActive }) => ({
            color: isActive ? "#EEFF25" : "#FFF",
          })}
          className="flex items-center gap-1"
        >
          Our Shop
          <Link to="/dashboard/my-cart">
            <div>
              <ItemCart />
            </div>
          </Link>
        </NavLink>
      </li>

      {!user && (
        <>
          <div className="dropdown dropdown-end hidden lg:block">
            <label tabIndex={0} className="btn btn-ghost text-white">
              <span>Account</span>
              <svg
                className="w-5 h-5 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/login"
                  style={({ isActive }) => ({
                    color: isActive ? "#EEFF25" : "#000",
                  })}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/registration"
                  style={({ isActive }) => ({
                    color: isActive ? "#EEFF25" : "#000",
                  })}
                >
                  Registration
                </NavLink>
              </li>
            </ul>
          </div>
          <li className="lg:hidden text-lg font-medium">
            <NavLink
              to="/login"
              style={({ isActive }) => ({
                color: isActive ? "#EEFF25" : "#FFF",
              })}
            >
              Login
            </NavLink>
          </li>
          <li className="lg:hidden text-lg font-medium">
            <NavLink
              to="/registration"
              style={({ isActive }) => ({
                color: isActive ? "#EEFF25" : "#FFF",
              })}
            >
              Sign Up
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10  bg-[#15151580]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
            className="bg-[#000] dropdown-content mt-3 z-[1] p-2 w-52 rounded-lg"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="text-[#FFF] font-black text-2xl">Bistro Boss</Link>
      </div>
      <div className="navbar-end">
        <div className="lg:hidden flex items-center gap-2">
          {user && <UserProfile handleLogout={handleLogout} user={user} />}
        </div>
        <ul className="hidden lg:flex justify-end gap-4 px-1 items-center">
          {navLinks}

          {user && <UserProfile handleLogout={handleLogout} user={user} />}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
