import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const user = false;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    // navigate("/admin");
  };
  return (
    <div className="h-12 md:h-24 border-b-orange-500 border-b-2 p-4 lg:px-20 xl:px-40 flex justify-between items-center text-orange-400 sticky top-0 z-50 bg-white">
      <div className="text-xl md:font-bold uppercase">
        <NavLink to="/">haque construction</NavLink>
      </div>
      <div className="hidden md:flex gap-4">
        <NavLink
          className="hover:border-b-orange-400 hover:border-b-2 focus:border-b-orange-400 focus:border-b-2 md:h-[2rem]"
          to="/"
        >
          Homepage
        </NavLink>
        <NavLink
          className="hover:border-b-orange-400 hover:border-b-2 focus:border-b-orange-400 focus:border-b-2 md:h-[2rem]"
          to="/gallery"
        >
          Gallery
        </NavLink>
        <NavLink
          className="hover:border-b-orange-400 hover:border-b-2 focus:border-b-orange-400 focus:border-b-2 md:h-[2rem]"
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          to="/admin"
          className="hover:border-b-orange-400 hover:border-b-2 focus:border-b-orange-400 focus:border-b-2 md:h-[2rem]"
        >
          Admin
        </NavLink>
        <NavLink
          onClick={handleLogout}
          className="hover:border-b-orange-400 hover:border-b-2 focus:border-b-orange-400 focus:border-b-2 md:h-[2rem]"
        >
          Logout
        </NavLink>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
