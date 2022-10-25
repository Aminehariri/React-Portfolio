import React from 'react'
import {RiContactsFill} from 'react-icons/ri'
import {GiNetworkBars} from 'react-icons/gi'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

export default function Contact() {
  return (
    <div name="Contact" className='w-full my-14'>
        <h2 className='text-2xl text-gradient section-title mt-4 mb-12 '> Contact me</h2>
        <div className='flex flex-col lg:flex-row pb-16'>
          <div className='w-full lg:w-1/2 my-2 md:my-6'>
            <h3 className='text-white'>Let's collaborate<GiNetworkBars className='ml-4'/></h3>
            <p className='my-4'>If You Have Any Suggestion, Project Or Even You Want To Say Hello.
              Please,Fill The Out Form And I Will Reply You Shortly</p>
              <ul className='my-4 md:my-8'>
                <li className='text-white'><FaMapMarkerAlt className='text-[#4ca5ff] my-4 mr-4' size={20}/> Casablanca</li>
                <li className='text-white'><FiMail className='text-[#4ca5ff]  my-4  mr-4' size={20}/>Aminehariri57@gmail.com</li>
                <li className='text-white'><BsLinkedin  className='text-[#4ca5ff] my-4  mr-4' size={20}/>www.linkedin.com/amine-hariri</li>
              </ul>
          </div>


          <div className='md:mx-4 md:mr-4'>
            <form action="" className='w-full'>
              <div className='flex flex-wrap my-1 justify-between'>
                <input type="text"  required className=' inp w-full md:w-[45%] my-5' placeholder='Full Name'/>
                <input type="text" required className='inp w-full md:w-[45%] md:my-5 mb-5 ' placeholder='Subject' />
              </div>
              
              <input type="mail" className='inp w-full mb-5' placeholder='Example@email.com' />
              <textarea  required className='inp w-full h-[120px] mb-5' placeholder='Message'></textarea>
              <input type="submit" className='border border-[#4ca5ff] p-3 cursor-pointer text-white' value='send message' name="" id="" />
            </form>
          </div>
        </div>
    </div>
  )
}



