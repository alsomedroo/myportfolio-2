"use client"
import Projects from "@/components/blog"
import Image from 'next/image';
import { useState, useEffect , Routes, Route, BrowserRouter} from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-transparent rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl ease-out duration-300">
      <div className="md:p-6 p-0">
        <h2 className="text-xl text-teal-400 font-bold mb-2">{title}</h2>
        <p className="text-white">{description} <p className="blinking-cursor text-teal-200">|</p></p>
        
      </div>
    </div>
  );
};

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
    <header >
      <div className={`w-full shadow-sky-400 md:shadow-transparent shadow-lg loader-container flex flex-row justify-between py-4 px-6 relative bg-black z-50 $${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
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
      </div>

      


      <div className="flex h-screen transform scale-110 justify-center items-center">
      <div className="max-w-6xl w-full items-center justify-between font-mono text-sm md:flex mt-4 relative z-40">
      
          <div data-aos="fade-right" className="hidden md:block shadow-sky-400 shadow-lg text-black w-full md:w-1/3 p-4">
            <Card
              imageSrc="/images/image1.jpg"
              title={"Myself | Academics"}
              description="I'm Dhruv Jain, a driven Developer with a fervor for innovation and technology.  I code , I teach on Youtube and make content on Instagram. I've embarked on an exhilarating journey through the dynamic realms of web development and DSA. I'm currently persuing B.tech from K.I.E.T (Ghaziabad). MERN is my love, DSA is my wife (End of the day, its the most important thing). Moving forward towards Blockchain. One pixel at a time."
              
            />
          </div>

      <div data-aos="fade-down" className="md:w-1/3 flex justify-center flex-col items-center mt-4 lg:mt-0">
        <img 
          src="/profilepic.jpg"
          alt="Profile Picture"
          className="rounded-full shadow-sky-400 shadow-lg border border-x-2 border-y-2 border-teal-300 box-shadow h-44 w-44 lg:h-32 lg:w-72 lg:h-72 object-cover transition-transform transform hover:shadow-sky-400 hover:scale-110 hover:shadow-xl ease-out duration-300"
        />
        <h1 className="text-2xl lg:text-5xl my-10">Dhruv Jain</h1>
        <p className="lg:text-xl">B.tech Student</p>
        <p className="flex flex-row">Founder -&nbsp;<a href="https://www.instagram.com/web.landers/" className="text-teal-300">Weblanders</a></p>
        
        <p>Experience - MERN | DSA | Blockchain</p>
      </div>
     
      <div data-aos="fade-left" className="hidden md:block shadow-sky-400 shadow-lg text-black w-full md:w-1/3 p-4">
            <Card
              imageSrc="/images/image1.jpg"
              title={"Entrepreneurial Venture"}
              description="It starts from the childhood when I used to see my father as my role model for my Entrepreneurial Journey, and it seems to be completed when I with my childhood friend founded a digital freelancing agency with the aim of merging artistry with technology. At Weblanders, we are not just creating websites; we are designing digital masterpieces that resonate with contemporary aesthetics and functionality."
            />
          </div>
          

    </div>
    
    </div>


    </header>
  );
};

export default Header;
