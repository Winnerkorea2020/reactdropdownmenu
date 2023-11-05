"use client";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { BiSolidChevronDown } from "react-icons/bi";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="nav-menu__items py-2.5 w-full">
      {items.submenu ? (
        <>
          <button
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className="flex justify-between items-center w-full"
          >
            <div className="block">{items.title}</div>
            <div>
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <BiSolidChevronDown size={20}></BiSolidChevronDown>
              )}
            </div>
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
