import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 object-cover rounded-s-xl"
          />
          <p className="text-white text-[14px] sm:text-[18px] font-bold cursor-pointer flex">
            Software Engineer
          </p>
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.title}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() =>
                !nav.link.startsWith("https") && setActive(nav.title)
              }
            >
              <a
                href={
                  nav.link.startsWith("https") ? `${nav.link}` : `#${nav.link}`
                }
                rel="noreferrer"
                target={nav.link.startsWith("https") ? "_blank" : "_self"}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.title}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    !nav.link.startsWith("https") && setActive(nav.title);
                  }}
                >
                  <a
                    href={
                      nav.link.startsWith("https")
                        ? `${nav.link}`
                        : `#${nav.link}`
                    }
                    rel="noreferrer"
                    target={nav.link.startsWith("https") ? "_blank" : "_self"}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
