import React from 'react'
import { skills } from '../data'
import MainTitle from './MainTitle';



export default function Skills() {
  return (
    <div name='Skills' className='w-full  text-white '  >
                    <MainTitle title='My Skills' />
            <div className='pb-6'>
              <h4 className='max--[700px] text-center text-[#777] text-xl  md:mx-12 lg:mx-32 '>I'm actualy capable to work with these technologies to build websites and web applications with modern user interfaces. </h4>
            </div>
            <div className=' mx-auto p-4 flex flex-col justify-center'>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-y-8 gap-x-4 text-center'>
            {
              skills.map((card =>(
                <div key={card.id} className='flex flex-col items-center group hover:scale-110 ease-in-out duration-500 '>
                  <img src={card.img} alt="" className='w-[60px]  grayscale group-hover:grayscale-0' />
                  <h3 className='mt-2'>{card.title}</h3>
                </div>
              )))
            }
        </div>
      </div>
    </div>
  )
}
