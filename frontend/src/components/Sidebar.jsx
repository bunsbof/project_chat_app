import React from "react";
import { NavLink } from "react-router-dom";

import { links } from "../data/data";
import { useStateContext } from "../context/ContextProvider";

import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";

const Sidebar = () => {
  const { activeBtn } = useStateContext();

  const activeLink = 'text-[#00A186] bg-[#E0F4F1] h-12 w-12 flex items-center justify-around text-2xl rounded-xl navButton'
  const normalLink = 'text-[#BAC1CA] h-12 w-12 flex items-center justify-around text-2xl hover:rounded-xl hover:text-[#00A186] focus:bg-[#E0F4F1] focus:rounded-xl focus:text-[#00A186]'
  return (
    <div className="py-10 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 flex flex-col w-full justify-between items-center">
      <div className="w-full">
        <img src={logo} alt="logo" className="rounded-full object-cover" />
      </div>
      <div className="flex flex-col justify-around items-center w-full h-96 p-4">
        {links.map((item) =>
          item.links.map((link) => (
            <NavLink
              to={`/${link.name}`}
              key={link.name}
              style={({ isActive }) => ({
                backgroundColor: isActive ? activeBtn : "",
              })}
              className={({isActive}) => (isActive ? activeLink : normalLink)}

            >
              {link.icon}
            </NavLink>
          ))
        )}
      </div>
      <div className="">
        <img src={avatar} alt="avatar" className="rounded-full w-8 h-8" />
      </div>
    </div>
  );
};

export default Sidebar;
