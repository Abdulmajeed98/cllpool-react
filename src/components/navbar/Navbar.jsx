import { ReactComponent as Logo } from "../../assets/logo.svg";
import NavLink from "./NavLink";
import data from "../../data.json";
import DropDown from "./../dropDown/DropDown";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAppContext } from "../../context/AppContext";

const Navbar = () => {
  const navLinksData = data.navLinks;
  const location = useLocation();
  const { pathname } = location;
  const { navbarBg } = useAppContext();
  return (
    <nav
      className={`fixed top-0 left-0 z-max flex w-full items-center  justify-between px-sides py-2 ${
        !pathname.includes("/projects") ? (navbarBg ? "bg-sky-500" : "bg-transparent") : "bg-sky-500"
      } transition-all duration-500`}>
      <HashLink to="/#home" className="h-24 w-44">
        <Logo className="h-full w-full fill-white " />
      </HashLink>
      <div className="flex items-center gap-x-12 px-2 py-4">
        {navLinksData.map((element) => (
          <NavLink key={element.id} destination={element.destination} content={element.content} type={element.type} />
        ))}
      </div>

      <DropDown />
    </nav>
  );
};

export default Navbar;
