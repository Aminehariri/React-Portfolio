import React from 'react'
import { skills } from '../data'
import MainTitle from './MainTitle';



export default function Skills() {
  return (
    <div name='Skills' className='w-full  text-white '  >
                    <MainTitle title='My Skills' />
            <div className='pb-6'>
              <h4 className='max-w-[700px] text-[#777] text-xl'>I'm actualy capable to work with these technologies to build websites and web applications with modern user interfaces. </h4>
            </div>
            <div className=' mx-auto p-4 flex flex-col justify-center'>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-y-4 gap-x-2 text-center'>
            {
              skills.map((card =>(
                <div key={card.id} className='flex flex-col items-center group hover:scale-110 ease-in-out duration-500 '>
                  <img src={card.img} alt="" className='w-20 grayscale group-hover:grayscale-0' />
                  <h3 className=''>{card.title}</h3>
                </div>
              )))
            }
        </div>
      </div>
    </div>
  )
}
