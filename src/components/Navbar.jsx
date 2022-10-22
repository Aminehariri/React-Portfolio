import React from 'react'
import { navLinks } from '../data'
import { useState } from 'react'
import {close,logo,menu} from '../assets'
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-scroll';
export default function Navbar() {

  const [toggle,setToggle] =useState(false);


  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      {/* <img src={logo} alt="logo" className='w-[124px] h-[32px]' /> */}
      <h1 className='text-white text-2xl text-gradient'>H.Amine</h1>
      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {
          navLinks.map((nav,index) =>(
            <li key={nav.id} >
              <a href={nav.id} key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-[#777] hover:text-white  mr-10} ${index ===navLinks.length -1 ? 'mr-0' : 'mr-10 '}`}>
                {nav.title}
              </a>
            </li>
            
          ))
        }
      </ul>

      <div className='sm:hidden flex justify-end flex-1 items-center '>
        <img src={toggle ?close :menu} alt="menu" className='w-[28px] object-contain cursor-pointer' onClick={() => setToggle((prev=> !prev))} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 border right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex-col flex justify-end items-center flex-1 '>
            {
              navLinks.map((nav,index) =>(
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-10} ${index ===navLinks.length -1 ? 'mr-0' : 'mb-10 '}`}>
                    <a href={nav.id} key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-[#777] hover:text-white  }`}>
                      {nav.title}
                    </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>      
    </nav>
  )
}
