import React, { useState, useEffect } from "react";
import { Bars3, Moon, Sun, XMark } from "../../assets/icons";
import logo from "../../assets/images/logo.png";
interface iNavTopProps extends React.HTMLProps<HTMLDivElement> {}
const NavTop: React.FC<iNavTopProps> = () => {
  // const { className } = props;
  const [isShowNav, setIsShowNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentYOffset = window.pageYOffset;
      let visible;
      if (currentYOffset < 128) visible = false;
      else visible = yOffset < currentYOffset;
      console.log(yOffset, currentYOffset);
      setYOffset(window.pageYOffset);
      setVisible(visible);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [yOffset]);
  useEffect(() => {
    if (isDarkMode === true) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);
  return (
    <nav
      className={
        "w-full flex fixed  items-center bg-pri bg-white bg-opacity-95  px-[5%] h-16 border-b-[1px]  border-solid border-gray-200  dark:bg-bgDark dark:border-[rgb(255,251,251,0.1)] dark:bg-opacity-[0.98] duration-500 " +
        (visible ? "  -top-16 " : " top-0 ")
      }
    >
      {isShowNav ? (
        <div className="phone:fixed phone:flex relative hidden w-screen h-screen bg-white top-0 bottom-0 left-0">
          <button
            className="p-1 absolute top-1 right-1"
            onClick={(e) => {
              e.stopPropagation();
              setIsShowNav(false);
            }}
          >
            <XMark />
          </button>
        </div>
      ) : null}
      <a
        className=" flex items-center justify-center gap-2  h-full px-2"
        href="/"
      >
        <img src={logo} className=" w-14 " alt="Logo" />
      </a>
      <div
        className="phone:flex hidden flex-1  justify-end "
        onClick={() => setIsShowNav(true)}
      >
        <button className=" p-2">
          <Bars3 />
        </button>
      </div>
      <div
        className={"flex-1 flex justify-end items-center gap-4 phone:hidden"}
      >
        <a className="px-3 py-2  font-medium rounded-md " href="#home">
          Home
        </a>
        <a className="px-3 py-2   font-medium rounded-md " href="#about">
          About
        </a>
        <a className="px-3 py-2   font-medium rounded-md " href="#work">
          Work
        </a>
        <a className="px-3 py-2   font-medium rounded-md " href="#contact">
          Contact
        </a>

        <i className="">|</i>
        <button
          className=" px-3 py-2"
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        >
          <i className="text-primary">{isDarkMode ? <Moon /> : <Sun />}</i>
        </button>
      </div>
    </nav>
  );
};

export default NavTop;
