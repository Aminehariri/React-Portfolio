import React from 'react'
import {AiFillFilePdf} from 'react-icons/ai'
import cv from '../../src/assets/skills/AMINE-HARIRI-CV.pdf';
import MainTitle from './MainTitle';


export default function About() {
  return (
    <div className='text-white t w-full h-[100vh] flex flex-col justify-center mt-6' name='About'>
      <MainTitle title='get to now me' />
      <p className='mb-12 text-[#777] text-center md:mx-12 lg:mx-32 text-xl md:text-2xl'>I'am Amine Hariri,Frontend web developer based in casablanca,I'like coding things from scratch and enjoy bringing ideas to life in the browser with modern technologies.
        I'm currently focusing on learning new technologies to improve my skills as a web developer.</p>
      <div className="flex items-center  justify-center">
        <button  className='btn'>
            <a href={cv} download className='bg-transparent'>Download Resume  <AiFillFilePdf className='icon'/></a>
        </button>
      </div>
    </div>
  )
}
