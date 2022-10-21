import React from 'react'
import {AiFillFilePdf} from 'react-icons/ai'

export default function About() {
  return (
    <div className='text-white t w-full h-[100vh] flex flex-col justify-center my-6' name='About'>
      <h2 className='text-2xl text-gradient section-title my-4 py-2'>About me</h2>
      <p className='my-12 text-[#ffffffcc] max-w-[840px] text-xl md:text-2xl'>I'am Amine Hariri,Junior Web Developer Based In Casablanca,I'like Coding Things From Scratch And Enjoy Bringing Ideas To Life In The Browser With Modern Technologies.
        I'm Looking For A New Opportunity On The Job Market,As a Frontend Web Developer. <br/> I'can work with these Technologies : Html- Css-Tailwind - Javascript-ReactJs-Php-MySql</p>
      <button  className='btn'>
        <a href="../assets/CV-AMINE-HARIRI.pdf" download className='bg-transparent'>Download CV <AiFillFilePdf/></a>
      </button>
    </div>
  )
}
