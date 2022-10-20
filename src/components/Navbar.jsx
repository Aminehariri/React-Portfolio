import React from 'react'
import { navLinks } from '../data'

export default function Navbar() {
  return (
    <div>
      <nav className='h-[60px] sm:h-[75px] flex justify-between bg-[#0D1016]  text-center items-center'>
        <h1 className='text-gradient text-[20px] font-bold'>H-AMINE</h1>
        <ul className='flex flex-1 justify-end text-[16px] '>
        {
          navLinks.map((element =>(
            <li key={element.id} className={`mx-4 `}>
              <a href="/" className='hover:text-white text-[#777] '>{element.title}</a>
            </li>
          )))
        }
        </ul>
      </nav>
    </div>
  )

  
}
