import React,{useState,useEffect} from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Domain from "./components/Domain";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import {ClimbingBoxLoader} from 'react-spinners'
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
    {isLoading ? (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black">
        <ClimbingBoxLoader color="#36d7b7"  size={20} />
      </div>
       ) : (
        <>
      <Navbar/>
      <Home/>
      <About/>
      <Domain/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <SocialLinks/>
      </>
      
      )}
    </div>
  );
}

export default App;
