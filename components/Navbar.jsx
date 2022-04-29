import React from "react";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer hover:underline ${classProps}`}>
      {title}
    </li>
  );
};

const Navbar = () => {
  return (
    <div className="flex p-4 w-full items-center justify-between pl-[8rem] pr-[8rem]">
      <div>
        <h2 className="font-bolder font-serif">Designer</h2>
      </div>

      <ul className="flex items-center">
        {["Home", "Shop", "Blog", "Contact"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}

        <div>
          <AiOutlineSearch size={20} />
        </div>
        <div>
          <AiOutlineShopping size={20} className="mx-4" />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
