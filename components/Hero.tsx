import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLinkedin } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
          <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
          <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill='purple'/>
          <Spotlight className='-top-28 -left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
             <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    
                </h2>

                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words='Khangai Enkhbat'
                />

                <p className='text-center md:tracking-wider mb- text-sm md:text-lg lg:text-2xl'>
                    Hello, I&apos;m a Full Stack Software Developer studying at DePauw University!
                </p>
              <div className='flex space-x-4'>
                <a href="https://www.linkedin.com/in/khangai-enkhbat-mongol01" target="_blank" rel="noopener noreferrer">
                    <MagicButton
                    title="Linkedin"
                    icon={<FaLinkedin/>}
                    position='right'
                    />
                </a>
                <a href="https://docs.google.com/document/d/1-pdk8NKASB5DiyW9aZmdrTMQglxtIFeZ/edit?usp=sharing&   ouid=112385374344681641682&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                    <MagicButton
                    title="Resume"
                    icon={<SiGoogledocs />}
                    position='right'
                    />
                </a>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Hero