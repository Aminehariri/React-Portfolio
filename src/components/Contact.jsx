import React from 'react'
import {RiContactsFill} from 'react-icons/ri'
import {GiNetworkBars} from 'react-icons/gi'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


export default function Contact() {

  const form =useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();
  
    emailjs.sendForm('service_nwit2b6', 'template_3osw4lr', form.current, 'Hb8usYJJxFW8p6O1Z')
    e.target.reset()
    alert("message send")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
  };
  

  return (
    <div name="Contact" className='w-full my-14'>
        <h2 className='text-2xl text-gradient section-title mt-4 mb-12 '> Contact me</h2>
        <div className='flex flex-col lg:flex-row pb-16'>
          <div className='w-full lg:w-1/2 my-2 md:my-6'>
            <h3 className='text-white'>Let's collaborate<GiNetworkBars className='ml-4 icon'/></h3>
            <p className='my-4 lg:max-w-[468px]'>If you have any suggestion,Project or even you want yo say hello.
              please,Fill the out form and i will reply you shortly.</p>
              <ul className='my-4 md:my-8'>
                <li className='text-white'><FaMapMarkerAlt className='text-[#4ca5ff] my-4 mr-4 icon' size={20}/> Casablanca</li>
                <li className='text-white'><FiMail className='text-[#4ca5ff]  my-4  mr-4 icon' size={20}/>Aminehariri57@gmail.com</li>
                <li className='text-white'><BsLinkedin  className='text-[#4ca5ff] my-4  mr-4 icon' size={20}/>www.linkedin.com/amine-hariri</li>
              </ul>
          </div>

          <div className='md:mx-4 md:mr-4'>
            <form ref={form} onSubmit={sendEmail} className='w-full'>
              <div className='flex flex-wrap my-1 justify-between'>
                <input type="text" name='name'  required className=' inp w-full md:w-[45%] my-5' placeholder='Full Name'/>
                <input type="text" name='subject' required className='inp w-full md:w-[45%] md:my-5 mb-5 ' placeholder='Subject' />
              </div>
              
              <input type="mail" name='email' className='inp w-full mb-5' placeholder='Example@domain.com' />
              <textarea  required name='message' className='inp w-full h-[120px] mb-5' placeholder='Message'></textarea>
              <input type="submit" className='border border-[#4ca5ff] p-3 cursor-pointer text-white' value='send message' name="" id="" />
            </form>
          </div>
        </div>
    </div>
  )
}




