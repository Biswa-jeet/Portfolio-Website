import React from 'react'

const Section = ({title,children}) => {
  return (
    <section 
    className=' min-h-fit flex flex-col 
    justify-start items-center py-16 px-5 
    text-center w-full bg-gray-800'>
        <h3 
        className='py-1 text-gray-50 
        text-3xl lg:text-8xl inline border-b-4 
        border-gray-500'>
          {title}
          </h3>
        {children}
    </section>
  );
};

export default Section