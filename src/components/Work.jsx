import React from 'react'
import imgone from '../assets/skills/realestate.jpg'
import imgtwo from '../assets/skills/workImg.jpeg'
import { projects } from '../data'
import { AiFillGithub } from 'react-icons/ai'
import MainTitle from './MainTitle'

export default function Work({title}) {
  return (
  <div name='Work' className='w-full mb-[90px] text-white '  >
    <div className='pt-6 relative '>
    <MainTitle  title='my last projects '/>

      {/* <h2 className='text-2xl text-gradient section-title mt-4 mb-12 md:mt-6'>My recent projects</h2> */}
    </div>

    
    <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 md:mx-36 gap-12 mb-6'>
          {
            projects.map((project =>
              (
                <div className='p-4 bg-gradient rounded-lg hover:scale-105 ease-in-out duration-500' key={project.id}>
                  <div className='rounded grid bg-transparent [place-items:center]'>
                    <img src={project.img} alt={project.title}  className='rounded-lg '/>
                  </div>
                      <h2 className=' bg-transparent text-gradient text-xl text-center py-4'>{project.title}</h2>
                      <p className='bg-transparent min-h-[114px]'>{project.describe}</p>
                  <div className='flex justify-around bg-transparent py-4 uppercase'>
                    <h4  className=' bg-transparent'>{project.skills.one}</h4>
                    <h4 className=' bg-transparent'>{project.skills.two}</h4>
                    <h4 className=' bg-transparent'>{project.skills.three}</h4>
                    <h4 className=' bg-transparent'>{project.skills.four}</h4>
                  </div>
                  <div className='flex justify-between bg-transparent py-4'>
                    <a href={project.github}  target='_blank' className='text-[#777] hover:text-white bg-transparent'>Code <AiFillGithub size={24} className='bg-transparent icon'/></a>
                    <a href={project.link}  target='_blank' className='text-[#777] hover:text-white bg-transparent'>Live demo</a>
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