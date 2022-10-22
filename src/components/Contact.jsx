import React from 'react'
import {RiContactsFill} from 'react-icons/ri'
import {GiNetworkBars} from 'react-icons/gi'

export default function Contact() {
  return (
    <div name="Contact" className='w-full h-[100vh]'>
        <h2 className='text-2xl text-gradient section-title my-4 py-2'> Contact me</h2>
        <h3 className='text-white'><GiNetworkBars/> Let's collaborate</h3>

        <div className='flex flex-col sm:flex-row'>
          <div className='bg-red-500 h-9'>one</div>
          <div className='bg-green-500 h-8'>two</div>
        </div>
    </div>
  )
}
