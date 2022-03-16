import { useRef, useMemo, useEffect } from "react";
import { lazy, Suspense } from "react";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import { HashLink } from "react-router-hash-link";
import useGetIntersectionState from "../../hooks/useGetIntersectionState";
import { useAppContext } from "../../context/AppContext";
const HeaderVideo = lazy(() => import("./HeaderVideo"));

const Header = () => {
  const intersectionOptions = useMemo(() => {
    return { root: null, threshold: 0.95 };
  }, []);
  const headerRef = useRef();
  const { setChangeNavbarBg } = useAppContext();
  const isIntersected = useGetIntersectionState(intersectionOptions, headerRef);
  useEffect(() => {
    if (isIntersected === undefined) return;
    setChangeNavbarBg(!isIntersected);
    return;
  }, [isIntersected]);
  return (
    <header ref={headerRef} className="relative flex h-screen w-screen flex-col items-center justify-between bg-black bg-opacity-50" id="home">
      <Suspense fallback={<div className="absolute inset-0 -z-10 grid h-full w-full place-items-center text-6xl text-red-600">Loading</div>}>
        <HeaderVideo />
      </Suspense>
      <div className="flex w-full flex-4 flex-col items-center justify-center gap-4 pt-8 text-white">
        <h1 className="text-center text-7xl">
          Swim better with us,
          <br />
          Get better with us
        </h1>
        <h3 className="text-center text-lg">CLLPOOL: Pool, Sauna, Turkish Bath, Jacuzzi, Construction and Industry LTD.</h3>
        <HashLink
          to="/#contact-us"
          className="mt-8 rounded-lg border-2 border-white px-8 py-4 text-lg  uppercase transition-all duration-500  hover:rounded-3xl hover:border-sky-600 hover:bg-sky-600">
          Contact Us
        </HashLink>
      </div>

      <a href="#about" className="mb-8 h-14 w-14 animate-bounce">
        <img width={40} height={40} src={ArrowDown} alt="arrow down icon" className="h-full w-full" />
      </a>
    </header>
  );
};

export default Header;
