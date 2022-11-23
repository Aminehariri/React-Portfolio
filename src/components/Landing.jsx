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
    <div className=' flex flex-col content-center justify-center landing text-white text-center '>
      <h3 className='text-[18px]   mb-4 md:mb-7 text-gradient font-light z-10 '>Let's build something together</h3>
      <h1 
        className='text-2xl  md:text-[4rem] sm:text-4xl font-extrabold  sm:font-normal text-[#ffffffcc]'>Hi, I'm {' '}
        
        <Typed strings={ ["AMINE" ,'HARIRI']} typeSpeed={200} backSpeed={150} loop/>
        
      </h1>
      <h1 className='text-2xl z-10 md:text-[3.7rem] bg-transparent sm:text-4xl font-extrabold  sm:font-normal text-[#ffffffcc] '><br/>A Front-End Web Developer</h1>
        <p className='py-6 w[70%] mx-0 md:mx-60 flex items-center justify-center text-center'>I’m a front-end web developer specializing in building exceptional digital experiences. Currently, I’m focusing on building responsive front-end web applications while learning back-end technologies.</p>
      

      <div className="flex justify-center items-center gap-6 mt-5">
            <a href="https://www.linkedin.com/in/amine-hariri-966485235/"  target='_blank' className='h-[60px] w-[60px] shadow-md rounded-full shadow-gray-600 flex items-center justify-center  '>
              <SiUpwork  size={30}/> 
            </a>
            <a href="https://github.com/Aminehariri"  target='_blank' className='h-[60px] w-[60px] shadow-md rounded-full shadow-gray-600 flex items-center justify-center  '>
              <AiFillGithub  size={30}/> 
            </a>
            <a href="https://www.linkedin.com/in/amine-hariri-966485235/"  target='_blank' className='h-[60px] w-[60px] shadow-md rounded-full shadow-gray-600 flex items-center justify-center  '>
              <AiFillLinkedin  size={30}/> 
            </a>
            <a href="mailto: aminehariri57@gmail.com"  target='_blank' className='h-[60px] w-[60px] shadow-md rounded-full shadow-gray-600 flex items-center justify-center  '>
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
    
    <div className='hidden md:flx fixd flex-col top-[40%] right-0 z-20'>
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
    </div>
    </>
    
  )
}



// md:text-5xl sm:text-4xl text:xl