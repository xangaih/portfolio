import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import Image from 'next/image';

const Experience = () => {
  return (
    <div className='py-20' id='workExperience'>
        <h1 className='heading'>
            My past <span className='text-purple'>Experience</span>
        </h1>
        <div className='flex items-center flex-wrap justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {workExperience.map((card) => (
                <Button
                key={card.id}
                duration={Math.floor(Math.random() *10000) + 9000}
                borderRadius='1.75rem'
                className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' width={128} height={128} />
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-center text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Experience


//w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10