import React from 'react'
import Section from './common/Section.jsx'
import app from '../assets/app.png'
import webdev from '../assets/webdev.png'
import uiux from '../assets/uiux.png'


const Domain = () => {

    const skills=[
        {
            id:1,
            image:webdev,
            title:"Web Developer"
        },
        {
            id:2,
            image:app,
            title:"Flutter App Developer"
        },
        {
            id:3,
            image:uiux,
            title:"UI/UX designer"
        },
        

        


    ]
  return (
    <div name='domain'>
    <Section
        
        title='My Domain'
        subtitle=''
    >
        <div className=' py-16 grid gap-10 lg:grid-cols-3'>
            {skills.map(({id,image,title})=>(
                <div 
                   key={id} 
                   className='flex flex-col items-center
                    justify-center p-5 shadow-md shadow-orange-400 rounded-xl 
                     duration-300 ease-in-out hover:scale-110 hover:bg-teal-200 '>
                    <img src={image} alt={title} className='w-36 h-36 md:w-60 md:h-60'/>
                    <h3 className='mt-5 text-lg font-bold text-slate-50 '>{title}</h3>
                    </div>
            ))}

        </div>
    </Section>
    </div>
  )
}

export default Domain