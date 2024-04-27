import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const user = false;
  // const navigate = useNavigate();
  const user = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    window.location = "/";
    // navigate("/admin");
  };
  return (
    <div className="h-[50px] md:h-[75px] border-b-orange-500 border-b-2 p-4 lg:px-20 xl:px-40 flex justify-between items-center text-orange-400 sticky top-0 z-30 bg-white uppercase">
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
        {!user && (
          <NavLink
            to="/admin"
            className="hover:border-b-orange-400 hover:border-b-2 focus:border-b-orange-400 focus:border-b-2 md:h-[2rem]"
          >
            Admin
          </NavLink>
        )}
        {user && (
          <NavLink
            to="/upload"
            className="hover:border-b-orange-400 hover:border-b-2 focus:border-b-orange-400 focus:border-b-2 md:h-[2rem]"
          >
            Upload
          </NavLink>
        )}
        {user && (
          <NavLink
            to="/messages"
            className="hover:border-b-orange-400 hover:border-b-2 focus:border-b-orange-400 focus:border-b-2 md:h-[2rem]"
          >
            Messages
          </NavLink>
        )}
        {user && (
          <NavLink
            to="/signup"
            className="hover:border-b-orange-400 hover:border-b-2 focus:border-b-orange-400 focus:border-b-2 md:h-[2rem]"
          >
            Create Admin
          </NavLink>
        )}
        {user && (
          <NavLink
            onClick={handleLogout}
            className="hover:border-b-orange-400 hover:border-b-2 focus:border-b-orange-400 focus:border-b-2 md:h-[2rem]"
          >
            Logout
          </NavLink>
        )}
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
