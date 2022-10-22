import React from 'react'
import imgone from '../assets/skills/realestate.jpg'
import imgtwo from '../assets/skills/workImg.jpeg'
import { projects } from '../data'


export default function Work() {
  return (
  <div name='Work' className='w-full mb-[90px] text-white '  >
    <div className='py-6'>
      <h2 className='text-2xl text-gradient section-title my-4 py-2 md:mt-6'>My recent projects</h2>
    </div>
    
    <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-6'>
          {
            projects.map((project =>
              (
                <div className='p-4 hover:scale-105 ease-in-out duration-500' key={project.id}>
                  <img src={project.img} alt={project.title} className='rounded-lg'/>
                  <div className='flex justify-between mt-4  '>
                      <h2 className='  text-xl'>{project.title}</h2>
                      <a href="/" className='text-[#777]'>Live demo</a>
                  </div>
                </div>
              )
              ))
          }
        </div>
    </div>
  </div>
  )
}