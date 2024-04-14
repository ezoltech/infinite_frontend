import React, { useState, useEffect } from "react";
import "../index.css";
import { Button } from "flowbite-react";
import { MdOutlineLightMode } from "react-icons/md";
export const Nav = () => {
  const [full, setFull] = useState(true);
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    if (theme == "") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const extend = () => {
    setFull(!full);
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "Light" : "dark");
  };

  useEffect(() => {
    setTimeout(() => setFull(!full), 2000);
  }, []);

  const navStyle = {
    width: full ? "90%" : "0%",
  };

  const linkStyle = {
    opacity: full ? "1" : "0",
    transition: full ? "2s" : "0.6s",
    visibility: full ? "visible" : "hidden",
  };

  return (
    <div
      className={`h-[40px] mx-auto top-3 z-20 flex justify-center items-center sticky  bg-white border border-gray-400 rounded-full duration-700 shadow-md  font-kanit`}
      style={navStyle}
    >
      <div
        className="w-[50%] flex justify-end md:gap-7 gap-4 translate-x-[-40px]"
        style={linkStyle}
      >
        <a className="links" href="/">
          Home
        </a>
        <a className="links" href="#">
          About
        </a>
        <a className="links" href="#">
          Services
        </a>
        <a className="links" href="#">
          Courses
        </a>
        <a className="links" href="#">
          Contact
        </a>
      </div>

      <div
        onClick={extend}
        className="absolute  flex justify-center top-[50%] border left-[50%] translate-x-[-50%] translate-y-[-50%] h-full w-[50px] z-[22] cursor-pointer shadow-md hover:shadow-xl rounded-full"
      >
        <img
          className="h-full imageLogo object-cover rounded-full"
          src="https://www.creativefabrica.com/wp-content/uploads/2020/09/09/infinity-symbol-logo-design-Graphics-5369643-1.jpg"
          alt="LOGO"
        />
      </div>

      <div
        className="w-[50%] flex justify-center md:gap-7 gap-4 translate-x-[40px]"
        style={linkStyle}
      >
        <MdOutlineLightMode onClick={handleThemeSwitch} />
        <Button size="xs" pill color="light">
          <a className="links" href="/login">
            Login
          </a>
        </Button>
      </div>
    </div>
  );
};
