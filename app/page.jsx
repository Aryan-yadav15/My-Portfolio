"use client"

import React, { useRef } from "react";
import Image from "next/image";
import './globals.css';
import Navbar from "./components/Navbar";
import Homepage from "./section/Homepage";
import AboutPage from "./section/AboutPage";
import Projects from "./section/Projects";
import CurrentWorking from "./section/CurrentWorking";
import MyCv from "./section/MyCv";
import Testimonial from "./section/Testimonial";
import Contact from "./section/Contact";
import Footer from "./components/Footer";

export default function Home() {
  // Create refs for Projects, AboutPage, and Contact
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="bg-customDarkGray text-primaryText">
      {/* Pass refs to Navbar */}
      <Navbar refs={{ projectsRef, aboutRef, contactRef }} />
      <Homepage />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={aboutRef}>
        <AboutPage />
      </div>
      <CurrentWorking />
      <MyCv />
      <Testimonial />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
