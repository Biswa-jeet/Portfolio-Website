import React from "react";

const About = () => {
  return (
    <div
      name="about"
      //className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      className="w-full h-screen bg-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-4xl lg:text-8xl inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        As an ambitious and driven undergraduate computer science student, 
        I am passionate about leveraging my technical skills and knowledge 
        to make a positive impact in the world of technology. I have developed
        a strong understanding of programming languages, data structures, algorithms.
        Through coursework and personal projects, I have gained proficiency in languages
        such as Java, Python, and Dart, and have experience in web development, cross 
        platform android development, and object-oriented programming.
       
        </p>

        <br />

        <p className="text-xl">
        I am currently seeking internships or entry-level positions that will provide me with 
        hands-on experience and allow me to apply my skills in real-world scenarios. I am eager 
        to learn from experienced professionals and contribute to projects that have a meaningful 
        impact on society.
        </p>
      </div>
    </div>
  );
};

export default About;