import React from 'react'

export default function MainTitle({title}) {
  return (
    <div className='m-16'>
      <h2 className="pb-8 capitalize block text-gradient text-2xl md:text-3xl lg:text-4xl text-center main-title mb-[5px]">{title}</h2>
    </div>
  )
}
