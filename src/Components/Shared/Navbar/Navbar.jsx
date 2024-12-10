import { Link, NavLink } from "react-router-dom";



const Navbar = () => {

      const navLinks = <>
            <li className="text-lg font-normal">
                  <NavLink to="/" style={({ isActive }) => ({
                        color: isActive ? '#EEFF25' : '#FFF',
                  })}>
                        Home
                  </NavLink>
            </li>
            <li className="text-lg font-normal">
                  <NavLink to="/contactUs" style={({ isActive }) => ({
                        color: isActive ? '#EEFF25' : '#FFF',
                  })}>
                        Contact us
                  </NavLink>
            </li>
            <li className="text-lg font-normal">
                  <NavLink to="/dashboard" style={({ isActive }) => ({
                        color: isActive ? '#EEFF25' : '#FFF',
                  })}>
                        Dashboard
                  </NavLink>
            </li>
            <li className="text-lg font-normal">
                  <NavLink to="/our-menu" style={({ isActive }) => ({
                        color: isActive ? '#EEFF25' : '#FFF',
                  })}>
                        Our Menu
                  </NavLink>
            </li>
            <li className="text-lg font-normal">
                  <NavLink to="/our-shop/salads" style={({ isActive }) => ({
                        color: isActive ? '#EEFF25' : '#FFF',
                  })}>
                        Our Shop
                  </NavLink>
            </li>

      </>

      return (
            <div className="navbar fixed z-10 bg-[#15151580]">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="bg-black dropdown-content mt-3 z-[1] p-2 w-52">
                                    {navLinks}
                              </ul>
                        </div>
                        <Link className="text-[#FFF] font-black text-2xl">Bistro Boss</Link>
                  </div>
                  <div className="navbar-end hidden lg:flex">
                        <ul className="flex justify-end gap-4 px-1">
                              {navLinks}
                        </ul>
                  </div>

            </div>
      );
};

export default Navbar;