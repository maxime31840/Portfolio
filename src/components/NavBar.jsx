import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser, AiFillStar } from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";

export default function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        navColour ? "backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        </Link>

        <button
          onClick={() => setExpand(!expand)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>

        <div
          className={`${
            expand ? "block" : "hidden"
          } md:flex items-center gap-6 md:block transition-all duration-300`}
        >
          {[ 
            { to: "/", label: "Introduction", icon: <AiOutlineHome className="text-xl" /> },
            { to: "/about", label: "À propos", icon: <AiOutlineUser className="text-xl" /> },
            { to: "/projet", label: "Projets", icon: <CgFileDocument className="text-xl" /> },
            { to: "/Contact", label: "Contactez-moi", icon: <CgFileDocument className="text-xl" /> },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center gap-2 text-white relative group"
            >
              {item.icon}
              <span>{item.label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-700 group-hover:w-full"></span>
            </Link>
          ))}

          <a
            href="https://github.com/maxime31840"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg text-white hover:bg-gray-700 transition-all"
          >
            <CgGitFork className="text-xl" />
            <AiFillStar className="text-lg" />
          </a>
        </div>
      </div>
    </nav>
  );  
}
