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
  return (
    <div className="bg-customDarkGray text-primaryText">
      <Navbar />
      <Homepage />
      <Projects />
      <AboutPage />
      <CurrentWorking />
      <MyCv />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
}
