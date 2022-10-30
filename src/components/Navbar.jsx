import React from 'react'
import { navLinks } from '../data'
import { useState } from 'react'
import {close,menu} from '../assets'
import logo from '../assets/logo.jpg'
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-scroll';
import{BallTriangle} from 'react-loader-spinner'


export default function Navbar() {



  const [toggle,setToggle] =useState(false);
  const title ='<AMINE/>'
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      {/* <img src={logo} alt="logo" className='w-[124px] h-[32px]' /> */}
      <h1 className='text-white text-2xl text-gradient'>{title}</h1>

      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {
          navLinks.map((nav,index) =>(
            <li key={nav.id} >
              <Link smooth={true} duration={300} to={nav.id} key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-[#777] hover:text-white  mr-10} ${index ===navLinks.length -1 ? 'mr-0' : 'mr-10 '}`}>
                {nav.title}
              </Link>
            </li>
            
          ))
        }
      </ul>

      <div className='sm:hidden flex justify-end flex-1 items-center '>
        <img src={toggle ?close :menu} alt="menu" className='w-[28px] object-contain cursor-pointer' onClick={() => setToggle((prev=> !prev))} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient  bg-gradient sidebar absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl `}>
            <ul className='list-none flex-col flex justify-end items-center flex-1 bg-transparent '>
            {
              navLinks.map((nav,index) =>(
                <li key={nav.id} className={`font-poppins font-normal z-10 cursor-pointer text-[16px] bg-transparent text-white mb-10} ${index ===navLinks.length -1 ? 'mr-0' : 'mb-10 '}`}>
                  <Link smooth={true} duration={300} to={nav.id} key={nav.id} className={`font-poppins bg-transparent  font-normal cursor-pointer text-[16px] text-[#777] hover:text-white  mr-10} `}j>
                    {nav.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>      
    </nav>
  )
}
