import React from 'react'
import {AiFillMail, AiOutlineArrowRight} from 'react-icons/ai'
import Typed from 'react-typed'
import {AiFillLinkedin,AiFillGithub,AiOutlineMail} from 'react-icons/ai'
import {SiUpwork} from 'react-icons/si' 
import {HiOutlineMail} from 'react-icons/hi'
import { Link } from 'react-scroll'
import '../../src/index.css'

export default function Landing() {
  return (
    <>
    <div className=' flex flex-col content-center justify-center text-white text-center landing'>

      <h3 className='text-[18px]   mb-4 md:mb-7 text-gradient font-light'>Let's build something together</h3>
      <h1 
        className='text-2xl  md:text-[4rem] sm:text-4xl font-bold  sm:font-normal text-[#ffffffcc]'>Hi, I'm {' '}
        
        <Typed strings={ ["AMINE" ,'HARIRI']} typeSpeed={200} backSpeed={150} loop/>
        
      </h1>
      <h1 className='text-2xl md:z-10 md:text-[3.4rem] bg-transparent sm:text-4xl font-bold  sm:font-normal text-[#ffffffcc] '><br/>A Front-End Web Developer</h1>
      <p className='py-6 md:mx-20 lg:mx-40 flex items-center justify-center text-center'>I’m a front-end web developer specializing in creating high user experience, let's work together and bring your idea to the internet. I help you to raise your preject to the highest success with highest quality.Through my experience as a developer</p>
      

      <div className="flex justify-center items-center gap-6 mt-5">
            <a href="https://www.linkedin.com/in/amine-hariri-966485235/"  target='_blank' className='h-[60px] w-[60px] shadow-md rounded-full shadow-gray-600 flex items-center justify-center  hover:border hover:border-gray-400'>
              <SiUpwork  size={30}/> 
            </a>
            <a href="https://github.com/Aminehariri"  target='_blank' className='h-[60px] w-[60px] shadow-md rounded-full shadow-gray-600 flex items-center justify-center hover:border hover:border-gray-400'>
              <AiFillGithub  size={30}/> 
            </a>
            <a href="https://www.linkedin.com/in/amine-hariri-966485235/"  target='_blank' className='h-[60px] w-[60px] shadow-md rounded-full shadow-gray-600 flex items-center justify-center hover:border hover:border-gray-400 '>
              <AiFillLinkedin  size={30}/> 
            </a>
            <a href="mailto: aminehariri57@gmail.com"  target='_blank' className='h-[60px] w-[60px] shadow-md rounded-full shadow-gray-600 flex items-center justify-center hover:border hover:border-gray-400'>
              <HiOutlineMail  size={30}/> 
            </a>

          
      </div>

      {/* <button className='btn group'>
        <Link to='About' className='bg-transparent'  smooth={true} duration={500}>
        Explore more 
        <AiOutlineArrowRight className='bg-[transparent]  ml-2  icon' />
        </Link>
      </button> */}

    </div> 
    
    {/* <div className='hidden md:flx fixd flex-col top-[40%] right-0 z-20'>
        <ul className='mr-4'>

          <li className='w-[100px] h-[50px] flex justify-around items-center mr-[-80px] hover:mr-[10px] ease-in-out duration-500' >
            <a href="https://www.linkedin.com/in/amine-hariri-966485235/"  target='_blank' className='flex justify-between items-center w-full text-white'>
              <AiFillLinkedin  size={30}/> Linkedin
            </a>
          </li>

          <li className='w-[100px]  h-[50px]  flex justify-between items-center  mr-[-80px] hover:mr-[10px] ease-in-out duration-500'>
            <a href="https://github.com/Aminehariri"  target='_blank' className='flex justify-between items-center w-full text-white '>
              <AiFillGithub  size={30}/> Github
            </a>
          </li>
          
          <li className='w-[100px]  h-[50px]  flex justify-between items-center  mr-[-80px] hover:mr-[10px] ease-in-out duration-500'>
            <a href="mailto: aminehariri57@gmail.com" target='_blank' className='flex justify-between items-center w-full text-white'>
              <HiOutlineMail  size={30}/> Email
            </a>
          </li>
          
        </ul>
    </div> */}
    </>
    
  )
}



// md:text-5xl sm:text-4xl text:xl