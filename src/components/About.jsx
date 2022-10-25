import React from 'react'
import {AiFillFilePdf} from 'react-icons/ai'

export default function About() {
  return (
    <div className='text-white t w-full h-[100vh] flex flex-col justify-center my-6' name='About'>
      <h2 className='text-2xl text-gradient section-title my-4 py-2'>About me</h2>
      <p className='my-12 text-[#777] max-w-[840px] text-xl md:text-2xl'>I'am Amine Hariri,Junior web developer based in casablanca,I'like coding things from scratch and enjoy bringing ideas to life in the browser with modern technologies.
        I'm currently focusing on learning new technologies to improve my skills as a web developer.I'm looking for a new opportunity on the job market,As a frontend web developer.</p>
      <button  className='btn'>
        <a href="../assets/CV-AMINE-HARIRI.pdf" download className='bg-transparent'>Download Resume  <AiFillFilePdf/></a>
      </button>
    </div>
  )
}
