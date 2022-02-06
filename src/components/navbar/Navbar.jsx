import { useState } from "react";
import Logo from "../../assets/logo.svg";
import NavLink from "./NavLink";
import data from "../../data.json";
import DropDown from "./../dropDown/DropDown";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navLinkData = data.navLinks;

  const changeNavbarBackground = () => {
    window.scrollY >= data.navbarHeight
      ? setNavBackground(true)
      : setNavBackground(false);
  };
  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between ${!navBackground && "bg-transparent"
        } ${navBackground && "bg-slate-700"
        } px-sides py-2 z-max transition-all duration-500`}
    >
      <a href="#home" className="w-44 h-24">
        <img src={Logo} alt="CLLPOOL Logo" className="w-full h-full" />
      </a>
      <div className="flex items-center gap-x-12 px-2 py-4">
        {navLinkData.map((element) => (<NavLink key={element.id} destination={element.destination} content={element.content} />))}
      </div>

      <DropDown navBgChange={navBackground} />
    </nav>
  );
};

export default Navbar;
