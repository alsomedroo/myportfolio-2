"use client";

import React, { useState, useEffect } from "react";
import Belowhead from "@/components/belowheader";
import Below from "@/components/smallbelowhead";
import Blogs from "@/components/blog";
import Skills from "@/components/skills";
import Courses from "@/components/courses";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 4) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-4 md:p-6 lg:p-8 w-full">
  <Belowhead className="w-full max-w-4xl mx-auto" />
  <Below className="w-full max-w-4xl mx-auto" />
  
  <Blogs className="w-full max-w-4xl mx-auto" />
  <Courses className="w-full max-w-4xl mx-auto" />
  <Skills className="w-full max-w-4xl mx-auto"/>
</main>

  );
}

