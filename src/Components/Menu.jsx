import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import openn from "../../src/icons/open.png";
import close from "../../src/icons/close.png";
const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    // navigate("/admin");
  };
  const NavLinks = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Gallery", url: "/gallery" },
    { id: 3, title: "Contact", url: "/contact" },
    { id: 3, title: "Admin", url: "/admin" },
  ];
  // const user = true;
  return (
    <div>
      {!open ? (
        <img
          src={openn}
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <img
          src={close}
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-orange-500 text-white absolute left-0 top-[100%] h-[calc(100vh-6rem)] w-full flex flex-col gap-8 items-center justify-center text-3xl z-50">
          {NavLinks.map((item) => (
            <NavLink key={item.id} to={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </NavLink>
          ))}
          {/* {user && (
            <NavLink to="/upload" onClick={setOpen(false)}>
              Upload
            </NavLink>
          )}
          {user && (
            <NavLink
              onClick={() => {
                setOpen(false);
                handleLogout();
              }}
            >
              Logout
            </NavLink>
          )} */}
        </div>
      )}
    </div>
  );
};

export default Menu;
