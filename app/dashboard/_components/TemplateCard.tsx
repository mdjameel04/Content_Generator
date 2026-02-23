import React from 'react'
import { TEMPLATE } from './TemplateList'
import Image from 'next/image'

const TemplateCard = (item:TEMPLATE) => {
  return (
    <div className='p-5 shadow-md rounded-md bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
        <Image src={item.icon} alt='icon' height={50} width={50}/>
        <h2 className='font-medium text-lg'>{item.name} </h2>
        <p className='text-gray-600 line-clamp-3'>{item.desc} </p>
    </div>
  )
}

export default TemplateCard