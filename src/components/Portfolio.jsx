import React from 'react'
import {FaGithub,FaExternalLinkAlt} from 'react-icons/fa'
import p1 from '../assets/weathercape.png'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/BMI.png'
import p4 from '../assets/p4.png'
import Section from './common/Section'

const Portfolio = () => {

    const projects=[
        {
            id:1,
            image:p1,
            title:"Weather Display App",
            github:'https://github.com/Biswa-jeet/Weather-Application'
        },
        {
            id:2,
            image:p2,
            title:"Portfolio Website",
            github:'https://github.com/Biswa-jeet/Portfolio-Website',
            demo:'https://github.com/'
        },
        {
            id:3,
            image:p3,
            title:"BMI Calculator",
            github:'https://github.com/Biswa-jeet/BMI_Calculator'
        },
        {
            id:4,
            image:p4,
            title:"LinkSync",
            github:'https://github.com/Biswa-jeet/LinkSync'
        },
    ]
  return (
    <div name='portfolio'>
    <Section
    title="Portfolio"
    subtitle=""
    >
      <div className=' py-16 grid gap-8 lg:gap-8 lg:grid-cols-3'>
          {projects.map(({id,image,title,github,demo})=>(
            <div 
            key={id}
            className='max-w-sm flex shadow-md shadow-orange-400 rounded-2xl bg-indigo-300 overflow-hidden'
            >
                <img src={image} alt={title} className='w-2/3'/>
                <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                    <h2 className='text-slate-50'>{title}</h2>
                    <div className='flex gap-4 mt-8'>
                    <a className='text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-125' href={github} target='_blank' rel='noopener noreferrer'>
                        <FaGithub/>
                    </a>
                    {/* <a className='text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-125' href={demo} target='_blank' rel='noopener noreferrer'>
                        <FaExternalLinkAlt/>
                    </a> */}
                    </div>
                </div>
                </div>
          ))}
      </div>
    </Section>
    </div>
  )
}

export default Portfolio