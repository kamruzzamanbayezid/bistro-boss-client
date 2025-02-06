import {
  FaCartArrowDown,
  FaHistory,
  FaHome,
  FaListUl,
  FaMailBulk,
  FaUserFriends,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineFileProtect } from "react-icons/ai";
import { VscPreview } from "react-icons/vsc";
import { TbAddressBook } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import useMyCartsData from "../../Hooks/apis/useMyCartsData";
import UseAdmin from "../../Hooks/UseAdmin";

const Dashboard = () => {
  const { carts } = useMyCartsData();
  const { data } = UseAdmin();

  return (
    <div className="max-width flex">
      {/* Dashboard side bar */}
      <div className="bg-[#D1A054] hidden lg:block w-[20%] pt-10 min-h-screen pl-7">
        <Link to="/">
          <div className="mb-10">
            <h2 className="text-2xl font-cinzen font-black">BISTRO BOSS</h2>
            <h4 className="text-lg font-cinzen font-bold">Restaurant</h4>
          </div>
        </Link>

        {/* NavLinks */}
        <ul className="font-cinzen">
          {/* Admin routes */}
          {data ? (
            <>
              <li className="text-lg font-medium mb-6">
                <NavLink
                  to="/admin-home"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFF" : "#000",
                    fontWeight: isActive && "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  })}
                >
                  <FaHome className="text-2xl" />
                  Admin Home
                </NavLink>
              </li>
              <li className="text-lg font-medium mb-6">
                <NavLink
                  to="/add-items"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFF" : "#000",
                    fontWeight: isActive && "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  })}
                >
                  <ImSpoonKnife className="text-2xl" />
                  Add items
                </NavLink>
              </li>
              <li className="text-lg font-medium mb-6">
                <NavLink
                  to="/manage-items"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFF" : "#000",
                    fontWeight: isActive && "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  })}
                >
                  <FaListUl className="text-2xl" />
                  Manage Items
                </NavLink>
              </li>
              <li className="text-lg font-medium mb-6">
                <NavLink
                  to="/dashboard/all-users"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFF" : "#000",
                    fontWeight: isActive && "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  })}
                >
                  <FaUserFriends className="text-2xl" />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-lg font-medium mb-6">
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFF" : "#000",
                    fontWeight: isActive && "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  })}
                >
                  <FaHome className="text-2xl" />
                  User Home
                </NavLink>
              </li>
              <li className="text-lg font-medium mb-6">
                <NavLink
                  to="/reservation"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFF" : "#000",
                    fontWeight: isActive && "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  })}
                >
                  <AiOutlineFileProtect className="text-2xl" />
                  Reservation
                </NavLink>
              </li>
              <li className="text-lg font-medium mb-6">
                <NavLink
                  to="/payment-history"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFF" : "#000",
                    fontWeight: isActive && "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  })}
                >
                  <FaHistory className="text-2xl" />
                  Payment History
                </NavLink>
              </li>
              <li className="text-lg font-medium mb-6">
                <NavLink
                  to="/dashboard/my-cart"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFF" : "#000",
                    fontWeight: isActive && "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  })}
                >
                  <FaCartArrowDown className="text-2xl" />
                  My Cart ({carts?.length})
                </NavLink>
              </li>
              <li className="text-lg font-medium mb-6">
                <NavLink
                  to="/add-reviews"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFF" : "#000",
                    fontWeight: isActive && "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  })}
                >
                  <VscPreview className="text-2xl" />
                  Add Reviews
                </NavLink>
              </li>
              <li className="text-lg font-medium mb-6">
                <NavLink
                  to="/my-bookings"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFF" : "#000",
                    fontWeight: isActive && "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  })}
                >
                  <TbAddressBook className="text-2xl" />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}

          {/* Divider */}
          <div className="h-[1px] bg-white mr-7 mb-6"></div>

          {/* Common navLinks */}
          <li className="text-lg font-medium mb-6">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#FFF" : "#000",
                fontWeight: isActive && "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              })}
            >
              <FaHome className="text-2xl" />
              Home
            </NavLink>
          </li>
          <li className="text-lg font-medium mb-6">
            <NavLink
              to="/my-bookings"
              style={({ isActive }) => ({
                color: isActive ? "#FFF" : "#000",
                fontWeight: isActive && "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              })}
            >
              <FaListUl className="text-2xl" />
              Menu
            </NavLink>
          </li>
          <li className="text-lg font-medium mb-6">
            <NavLink
              to="/my-bookings"
              style={({ isActive }) => ({
                color: isActive ? "#FFF" : "#000",
                fontWeight: isActive && "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              })}
            >
              <FaBagShopping className="text-2xl" />
              Shop
            </NavLink>
          </li>
          <li className="text-lg font-medium mb-6">
            <NavLink
              to="/my-bookings"
              style={({ isActive }) => ({
                color: isActive ? "#FFF" : "#000",
                fontWeight: isActive && "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              })}
            >
              <FaMailBulk className="text-2xl" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className="w-[80%] pt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
