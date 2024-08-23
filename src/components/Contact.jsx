import React from 'react'
import Section from './common/Section'

const Contact = () => {
  return (
    <div name='contact'
    className='flex flex-col items-center justify-center gap-3 '>
        <Section
        title='Contact'
        subtitle=''>
         <div className='max-w-screen-xl p-4 text-left justify-center w-full lg:w-4/6'>
            <form action="https://getform.io/f/426e3c35-6ca1-4cfb-b9b3-917a5522d7d2" method='POST'>
                <div className='gap-4 w-full'>
                    <div className='flex flex-col'>
                        <label className='text-white captitalize 
                        text-sm py-2 font-extralight'>
                            Name
                        </label>
                        <input type="text"
                        name='name'
                        placeholder='name'
                        required={true}
                        className='border-2 rounded-lg p-3 flex 
                        focus:outline-none border-gray-400 
                        bg-transparent text-white' />
                        
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white captitalize 
                        text-sm py-2 font-extralight'>
                            Email
                        </label>
                        <input type="text"
                        name='email'
                        required={true}
                        placeholder='Enter your email'
                        className='border-2 rounded-lg p-3 flex 
                        focus:outline-none border-gray-400 
                        bg-transparent text-white' />
                        
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white captitalize 
                        text-sm py-2 font-extralight'>
                            Message
                        </label>
                    <textarea name="message" rows="10" 
                    className='border-2 rounded-lg p-3 flex focus:outline-none
                    border-gray-400  bg-transparent text-white'></textarea>
                        
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='my-8 bg-teal-400 text-white 
                    px-6 py-3 uppercase rounded-md tracking-wider 
                    cursor-pointer hover:scale-110 duration-500'>SEND</button>
                </div>
            </form>
         </div>
        </Section>
    </div>
  )
}

export default Contact