import React from 'react'
import Section from './common/Section.jsx'
import html from '../assets/html.png'
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import python from '../assets/python.png'
import java from '../assets/java.png';
import dart from '../assets/dart.png';
import tailwindcss from '../assets/tailwind css.png';
import flutter from '../assets/flutter.png'
import mysql from '../assets/mysql.png';
import bootstrap from '../assets/bootstrap.png';
import figma from '../assets/figma.png';
import c from '../assets/c.png'
import flask from '../assets/flask.png';
import jquery from '../assets/jquery.png';


const Skills = () => {

    const skills=[
        {
            id:1,
            image:html,
            title:"HTML"
        },
        {
            id:2,
            image:css,
            title:"CSS"
        },
        {
            id:3,
            image:js,
            title:"Javascript"
        },
        {
            id:4,
            image:react,
            title:"React js"
        },
        {
            id:5,
            image:jquery,
            title:"JQuery"
        },
        {
            id:6,
            image:tailwindcss,
            title:"Tailwind CSS"
        },
        {
            id:7,
            image:java,
            title:"Java"
        },
        {
            id:8,
            image:python,
            title:"Python"
        },
        {
            id:9,
            image:flutter,
            title:"Flutter"
        },
        {
            id:10,
            image:mysql,
            title:"MySQL"
        },
        {
            id:11,
            image:bootstrap,
            title:"Bootstrap"
        },
        {
            id:12,
            image:figma,
            title:"Figma"
        },
    ]
  return (
    <div name='skills'>
    <Section
        
        title='Tech Stack'
        subtitle=''
    >
        <div className=' py-16 grid gap-10 grid-cols-2 lg:grid-cols-5'>
            {skills.map(({id,image,title})=>(
                <div 
                   key={id} 
                   className='flex flex-col items-center
                    justify-center p-5 shadow-md shadow-orange-400 rounded-xl 
                     duration-300 ease-in-out hover:scale-110 hover:bg-teal-200 '>
                    <img src={image} alt={title} className='w-36 h-36 md:w-20 md:h-20 '/>
                    <p className='mt-5 text-base text-slate-50'>{title}</p>
                    </div>
            ))}

        </div>
    </Section>
    </div>
  )
}

export default Skills