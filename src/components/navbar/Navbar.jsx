import { useState } from "react";
import Logo from "../../assets/nav-logo.svg";
import NavLink from "./NavLink";
import data from "../../data.json";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
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
        } px-sides py-8 z-max transition-all duration-500`}
    >
      <a href="#" className="w-44 h-26">
        <img src={Logo} alt="CLLPOOL Logo" className="w-full h-full" />
      </a>
      <div className="flex items-center gap-x-12 px-2 py-4">
        <NavLink destination={"#"} content={"home"} />
        <NavLink destination={"#"} content={"about"} />
        <NavLink destination={"#"} content={"projects"} />
        <NavLink destination={"#"} content={"our client"} />
        <NavLink destination={"#"} content={"contact us"} />
      </div>

      <select name="langs" id="langs">
        {data?.languages.map((item) => (
          <option value={item.abbr}>{item.lang}</option>
        ))}
      </select>
    </nav>
  );
};

export default Navbar;
