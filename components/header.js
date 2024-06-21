"use client"

import Image from 'next/image';
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }
}, []);
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
            // scroll down
            setShowNav(false);
        } else {
            // scroll up
            setShowNav(true);
        }
        lastScrollY = window.scrollY;
    }
};

  return (
    <header className={`w-full shadow-sky-400 md:shadow-transparent shadow-lg loader-container flex flex-row justify-between py-4 px-6 relative bg-black z-50 $${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="loader  flex flex-row">
        <span className="text-3xl text-white font-arial md:text-5xl md:mx-3 xs:text-xl">P</span>
        <span className="text-3xl text-white font-arial md:text-5xl md:mx-3 xs:text-xl">o</span>
        <span className="text-3xl text-white font-arial md:text-5xl md:mx-3 xs:text-xl">r</span>
        <span className="text-3xl text-white font-arial md:text-5xl md:mx-3 xs:text-xl">t</span>
        <span className="text-3xl text-white font-arial md:text-5xl md:mx-3 xs:text-xl">f</span>
        <span className="text-3xl text-white font-arial md:text-5xl md:mx-3 xs:text-xl">o</span>
        <span className="text-3xl text-white font-arial md:text-5xl md:mx-3 xs:text-xl">l</span>
        <span className="text-3xl text-white font-arial md:text-5xl md:mx-3 xs:text-xl">i</span>
        <span className="text-3xl text-white font-arial md:text-5xl md:mx-3 xs:text-xl">o</span>
      </div>

      <nav className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-white hover:text-teal-300 transition duration-300">
          Home
        </a>
        <a href="#Projects" className="text-white hover:text-teal-300 transition duration-300">
          Projects
        </a>
        <a href="#Courses" className="text-white hover:text-teal-300 transition duration-300">
          Courses
        </a>
        <span>|</span>
        <a href="https://www.instagram.com/alsomedroo/" className="text-white hover:text-teal-300">
          <Image src="/insta.png" alt="Instagram" width={24} height={24} className="w-6 h-6" />
        </a>
        <a href="https://github.com/alsomedroo" className="text-white hover:text-teal-300 ">
          <Image src="/githubbb.png" alt="GitHub" width={24} height={24} className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/dhruv-jain-79617a305/" className="text-white hover:text-teal-300">
          <Image src="/linkedinn.png" alt="LinkedIn" width={24} height={24} className="w-6 h-6 rounded-full" />
        </a>
         <a href="https://www.youtube.com/@alsomedroo" className="text-white hover:text-teal-300">
              <Image src="/youtu.webp" alt="Youtube" width={24} height={24} className="w-6 h-6 rounded-full" />
            </a>
      </nav>

      <div className="md:hidden flex justify-center w-full">
        <button
          className="text-white font-bold py-2 px-4 rounded absolute top-0 right-0 m-4 z-50"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-75 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} ease-in-out md:hidden z-50`}>
        <div className="flex flex-col items-center w-full h-full py-4 px-6 space-y-4">
          <button
            className="self-end text-white font-bold py-2 px-4"
            onClick={toggleMenu}
          >
            &#10005;
          </button>
          <a href="#" className="text-white hover:text-teal-300 transition duration-300">
            Home
          </a>
          <a href="#Projects" className="text-white hover:text-teal-300 transition duration-300">
            Projects
          </a>
          <a href="#Couses" className="text-white hover:text-teal-300 transition duration-300">
            Courses
          </a>
          <h1 className="flex space-x-4">
            <a href="https://www.instagram.com/alsomedroo/" className="text-white hover:text-teal-300">
              <Image src="/insta.png" alt="Instagram" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://github.com/alsomedroo" className="text-white hover:text-teal-300">
              <Image src="/githubbb.png" alt="GitHub" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/dhruv-jain-79617a305/" className="text-white hover:text-teal-300">
              <Image src="/linkedinn.png" alt="LinkedIn" width={24} height={24} className="w-6 h-6 rounded-full" />
            </a>
            <a href="https://www.youtube.com/@alsomedroo" className="bg-transparent text-white hover:text-teal-300">
              <Image src="/youtu.webp" alt="Youtube" width={24} height={24} className="w-6 h-6 rounded-full" />
            </a>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
