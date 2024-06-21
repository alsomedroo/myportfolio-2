"use client"

import Image from 'next/image';


const AnimatedText = () => {
    return (
      <div className="lg:hidden w-full items-center shadow-sky-400 shadow-lg justify-between font-mono text-sm flex mt-4 relative z-40">

<h1 className="flex w-full justify-center items-center">
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
  
  
  
      
  
  
  
          
    );
  };
  
  export default AnimatedText;
  