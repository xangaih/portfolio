import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md: mb-5' id='contact'>
        

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                <span className='text-purple text-center'>Thank you </span> 
                for visiting my Site!
            </h1>
        </div>

        <div className='flex mt-20 md:flex-row flex-col justify-between items-center'>
            <p className=' w-full md:text-base text-sm md:font-normal font-light text-center'>Copyright  © 2024 Khangai Enkhbat</p>
        </div>
    </footer>
  )
}

export default Footer