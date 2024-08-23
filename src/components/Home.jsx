import React from "react";
//import { HiArrowNarrowRight } from "react-icons/hi";
import prof from "../assets/prof.png";
import Typewriter from "typewriter-effect";
//import { Link } from "react-scroll";

const Home = () => {

  return (
   
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend<br/>
          <Typewriter 
                options={{
                  strings: ['Application','Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
                  Aspiring developer seeking knowledge, 
                  eager to contribute, and passionate 
                  about creating innovative solutions. 
                  Embracing challenges to learn, grow, 
                  and make a positive impact in the 
                  dynamic world of technology.
          </p>
          <div className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"><a
      href="/Biswojit_Palai.pdf"
      download={true}
    >
      Download Resume
    </a></div>
        </div>
        <div>
          <img
            src={prof}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 h-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
    
  );
};

export default Home;