import React from 'react'
import {FaHackerrank,FaGithub,FaLinkedin,FaArrowDown} from 'react-icons/fa'
import avatar from '../assets/avatar.png'
import '../index.css'
const Profile = () => {

    const social=[
        {
            id:1,
            link:'https://www.hackerrank.com/',
            icon:<FaHackerrank/>
        },
        {
            id:2,
            link:'https://github.com/',
            icon:<FaGithub/>
        },
        {
            id:3,
            link:'https://in.linkedin.com/',
            icon:<FaLinkedin/>
        }
    ]

    window.addEventListener('scroll',function(){
        const downArrow= document.querySelector(".down-arrow");
        if(this.scrolly>=90) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    });
  return (
    <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <h2 className='text-5xl text-rose-600 uppercase font-bold'>My Name is </h2>
        <h3 className='py-3 text-2xl'>Software Engineer</h3>
        <p className='max-w-xl font-light text-gray-500'>hello guys<span className='animate-pulse text-5xl'>Biswa here</span> how r you passionate about lot of oppobxfovb;OUWUBEVOwEvbevvb evweo v wev ;uweovuwev w veu;o </p>


        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
            {social.map(({id,link,icon})=>(
                <a 
                href={link} 
                key={id} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='cursor-pointer duration-300 hover:text-rose-600'>
                {icon}
                </a>
            ))}


        </div>
        
        <div>
                <img 
                src={avatar}
                alt="avatar"
                className='w-60 h-60 md:w-72 md:h-72 
                object-cover object-top bg-gradient-to-b
                 from-rose-600 rounded-xl pt-5'
                />

                <a href='/biswa ux resume.pdf'
                download={true}
                className='flex items-center justify-center mt-10 bg-gradient-to-r
                from-rose-600
                to-teal-500
                text-white py-2 rounded-lg'>Resume</a>
            </div>
   

          <div className='mt-10 down-arrow'>
            <FaArrowDown className='text-gray-400 text-2xl 
            animate-bounce'/>
          </div>

    </section>
  )
}

export default Profile