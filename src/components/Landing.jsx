import React from 'react'
import {AiFillMail, AiOutlineArrowRight} from 'react-icons/ai'
import Typed from 'react-typed'
import {AiFillLinkedin,AiFillGithub,AiOutlineMail} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import { Link } from 'react-scroll'


export default function Landing() {
  return (
    <>
    <div className='h-[80vh] text-white  '>
      <h3 className='text-[18px] mt-24  mb-4 text-gradient font-normal'>Let's build something together</h3>
      <h1 
        className=' md:text-6xl sm:text-4xl text-2xl font-bold  sm:font-normal text-[#ffffffcc] '>Hi, I'm {' '}
        
        <Typed strings={ ["AMINE" ,'HARIRI']} typeSpeed={200} backSpeed={150} loop/>
        <br/>Front-End Web Developer
      </h1>
        <p className='py-6 max-w-[500px]'>I’m a front-end web developer specializing in building exceptional digital experiences. Currently, I’m focused on building responsive front-end web applications while learning back-end technologies.</p>
      <button className='btn group'>
        <Link to='About' className='bg-transparent'  smooth={true} duration={500}>
        Explore more 
        <AiOutlineArrowRight className='bg-[transparent]  ml-2 right' />
        </Link>
      </button>
    </div> 
    
    <div className='hidden md:flex fixed flex-col top-[40%] right-0'>
        <ul className='mr-4'>

          <li className='w-[100px] h-[50px] flex justify-around items-center mr-[-80px] hover:mr-[10px] ease-in-out duration-500' >
            <a href="/" className='flex justify-between items-center w-full text-white'>
              <AiFillLinkedin  size={30}/> Linkedin
            </a>
          </li>

          <li className='w-[100px]  h-[50px]  flex justify-between items-center  mr-[-80px] hover:mr-[10px] ease-in-out duration-500'>
            <a href="/" className='flex justify-between items-center w-full text-white '>
              <AiFillGithub  size={30}/> Github
            </a>
          </li>
          
          <li className='w-[100px]  h-[50px]  flex justify-between items-center  mr-[-80px] hover:mr-[10px] ease-in-out duration-500'>
            <a href="/" className='flex justify-between items-center w-full text-white'>
              <HiOutlineMail  size={30}/> Email
            </a>
          </li>
          
        </ul>
      </div>
    </>
    
  )
}



// md:text-5xl sm:text-4xl text:xl