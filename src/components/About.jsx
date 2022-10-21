import React from 'react'
import {AiFillFilePdf} from 'react-icons/ai'

export default function About() {
  return (
    <div className='text-white t w-full h-[100vh] flex flex-col justify-center my-6' name='About'>
      <h2 className='text-2xl text-[#4ca5ff] section-title my-4 py-2'>About me</h2>
      <p className='my-12 text-[#ffffffcc] max-w-[900px] text-xl'>I'am Amine Hariri,Junior Web Developer Based In Casablanca,I'like Coding Things From Scratch And Enjoy Bringing Ideas To Life In The Browser With Modern Technologies.
        I'm Looking For A New Opportunity On The Job Market,As An Intern Web Developer. I Build Websites Using : Html- Css-Tailwind - Javascript-ReactJs-Php-MySql</p>
      <button  className='btn'>
        <a href="../assets/CV-AMINE-HARIRI.pdf" download className='bg-transparent'>Download CV <AiFillFilePdf/></a>
      </button>
    </div>
  )
}
