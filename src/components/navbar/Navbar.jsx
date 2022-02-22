import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import NavLink from "./NavLink";
import data from "../../data.json";
import DropDown from "./../dropDown/DropDown";
import { useLocation } from "react-router-dom";


const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navLinksData = data.navLinks;
  const location = useLocation();
  const pathname = location.pathname;

  const changeNavbarBackground = () => {
    window.scrollY >= data.navbarHeight
      ? setNavBackground(true)
      : setNavBackground(false);
  };
  window.addEventListener("scroll", changeNavbarBackground);
  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between ${!pathname.includes('/projects') ? navBackground ? 'bg-sky-500' : 'bg-transparent' : 'bg-sky-500'} px-sides py-2 z-max transition-all duration-500`}
    >
      <a href="#home" className="w-44 h-24">
        <Logo className='w-full h-full fill-white ' />
      </a>
      <div className="flex items-center gap-x-12 px-2 py-4">
        {navLinksData.map((element) => (<NavLink key={element.id} destination={element.destination} content={element.content} type={element.type} />))}
      </div>

      <DropDown navBgChange={navBackground} />
    </nav>
  );
};

export default Navbar;
