import React, { useEffect, useState } from "react";
import NavLink from "../components/Navlink";
import { useRouter } from "next/router";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";

function Navbar(props) {
  const [toggle, setToggler] = useState(false);
  const router = useRouter();
  const [render, setRender] = useState(false);

  function changeNavbar() {
    if (window.pageYOffset > 5) {
      setToggler(true);
    } else {
      setToggler(false);
    }
  }

  useEffect(() => {
    setRender(true);
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  if (!render) {
    return null;
  } else {
    return (
      <div className="flex w-full justify-center z-[1000]">
        <div
          className={`navbar gap-64 md:gap-0 fixed items-center flex md:justify-between justify-around my-4 w-[80%] rounded-xl z-[1000] ${
            toggle
              ? "bg-white text-portfolio-dark"
              : "bg-transparent text-white"
          }`}
          style={{
            transition: "0.2s ease-in-out",
          }}
        >
          <button
            className={`navbar-start  rounded-xl font-bold  items-center gap-3 w-max px-6 py-2 md:px-8 md:py-3  ${
              toggle
                ? "bg-portfolio-dark text-white "
                : "bg-white text-portfolio-dark "
            } ${router.asPath == "/projects" ? "flex md:ml-8" : "hidden"}`}
          >
            <Link href="/">
              <HiArrowLeft />
            </Link>
          </button>

          <h1
            className={`text-xl  w-max md:ml-7 font-bold z-[1000] ${
              router.asPath == "/projects"
                ? " navbar-end md:mr-8"
                : "navbar-start"
            }`}
          >
            MySite{" "}
          </h1>

         

          <div
            className={`hidden mx-auto z-[1000] ${
              router.asPath == "/projects" ? "hidden" : "lg:flex"
            }`}
          >
            <ul className="flex flex-row gap-x-7">
              <li>
                <NavLink text="About me" id="about"></NavLink>
              </li>
              <li>
                <NavLink text="Education" id="education"></NavLink>
              </li>
              <li>
                <NavLink text="Experience" id="experiences"></NavLink>
              </li>
              <li>
                <NavLink text="Skills" id="skills"></NavLink>
              </li>
              <li>
                <NavLink text="Projects" id="porfolio"></NavLink>
              </li>
              <li>
                <NavLink text="Contact" id="contact"></NavLink>
              </li>
            </ul>
          </div>
          <button
            className={` px-8 py-3 navbar-end w-max rounded-xl font-bold  ${
              toggle
                ? "bg-portfolio-dark text-white"
                : "text-portfolio-dark bg-white"
            } ${router.asPath == "/projects" ? "hidden" : ""}`}
            style={{
              transition: "0.2s ease-in-out",
            }}
          >
            My Resume
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
