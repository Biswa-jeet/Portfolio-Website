import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./Navlinks";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "domain",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "experience",
    },
    {
      id: 6,
      link: "portfolio",
    },
    {
      id: 7,
      link: "contact",
    },
  ];
  return (
    <div className="flex z-50 fixed justify-between items-center w-full h-20 px-4 bg-black text-white">
      <div >
        <h1 className="text-5xl font-signature ml-2">Biswojit Palai</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <NavLinks
            key={id}
            link={link}
            className="px-5 cursor-pointer capitalize font-medium text-slate-50 hover:px-4 hover:scale-125 hover:bg-teal-300 hover:rounded-xl duration-200"
          />
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 md:hidden z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <NavLinks
              key={id}
              link={link}
              className="px-4 text-slate-50 cursor-pointer capitalize py-6 text-4xl"
              onClick={() => setNav(!nav)}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar