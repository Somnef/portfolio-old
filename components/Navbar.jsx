import React, { useEffect, useState } from "react";
import NavLink from "../components/Navlink"

function Navbar(props) {
  const [toggle, setToggler] = useState(false);

  function changeNavbar() {
    if (window.pageYOffset > 5) {
      setToggler(true);
    } else {
      setToggler(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });

  return (
    <div className="flex w-full justify-center z-[10]">
      <div
        className={`navbar fixed items-center flex justify-around my-4 w-[80%] rounded-xl z-[10] ${toggle ? "bg-white text-black" : "bg-transparent text-white"
          }`}
        style={{
          transition: "0.2s ease-in-out",
        }}
      >
        <h1 className="text-xl  font-bold z-[10]">Portfolio</h1>
        <div className="navbar-end md:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li >
                <NavLink active={true} text="About me" id="about" ></NavLink>
              </li>
              <li >
                <NavLink active={false} text="Education" id='education'></NavLink>
              </li>
              <li>
                <NavLink active={false} text="Experience" id='experiences'></NavLink>
              </li>
              <li>
                <NavLink active={false} text="Skills" id='skills'></NavLink>
              </li>
              <li>
                <NavLink active={false} text="Projects" id='porfolio'></NavLink>
              </li>
              <li>
                <NavLink active={false} text="Contact" id='contact'></NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden lg:flex z-[1000]">
          <ul className="flex flex-row gap-x-7">
            <li >
              <NavLink text="About me" id="about" ></NavLink>
            </li>
            <li >
              <NavLink text="Education" id='education'></NavLink>
            </li>
            <li>
              <NavLink text="Experience" id='experiences'></NavLink>
            </li>
            <li>
              <NavLink text="Skills" id='skills'></NavLink>
            </li>
            <li>
              <NavLink text="Projects" id='porfolio'></NavLink>
            </li>
            <li>
              <NavLink text="Contact" id='contact'></NavLink>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
