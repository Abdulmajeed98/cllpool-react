import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const StateProvider = ({ children }) => {
  const [navbarBg, setNavbarBg] = useState(false);

  const setChangeNavbarBg = (changeBg) => {
    return setNavbarBg(changeBg);
  };

  const value = {
    navbarBg,
    setChangeNavbarBg,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
