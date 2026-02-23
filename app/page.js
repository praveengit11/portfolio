// import React, { useEffect, useRef, useState } from 'react';
'use client'
import { useEffect, useState } from 'react'

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    }
    else{
      setIsDarkMode(false)
    }
  }, [])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'
    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = ''
    }
  })

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header />
      <About isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Projects />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
