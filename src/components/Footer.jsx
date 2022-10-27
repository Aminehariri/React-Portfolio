import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
export default function Footer() {
    let time=new Date();
    let year = time.getFullYear();  
    
  return (
    
    <>
    <hr />
    <footer className='text-right h-[100px] text-[#ffffffcc] mt-7 text-xl uppercase'>
    <h4><AiOutlineCopyrightCircle className='icon'/> Amine hariri | {year}</h4>
    </footer>
    </>
  )
}


