import Image from "next/image";
import './globals.css';
import Navbar from "./components/Navbar";
import Homepage from "./section/Homepage";
import AboutPage from "./section/AboutPage";
import Projects from "./section/Projects";

export default function Home() {
  return (
    <div className="bg-customDarkGray text-primaryText">
      <Navbar />
      <Homepage />
      <Projects/>
      <AboutPage />
      <Projects/>
    </div>
  );
}
