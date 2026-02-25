"use client"
import { MenuList } from '@/Data/Constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {

    const path = usePathname()

     useEffect(()=>{
      console.log(path)
    },[])
  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
            <Image src={"/content-logo.png"} alt='logo' width={60} height={60}/>
        </div>
        <hr className='my-6 border'/>

        <div className='mt-4 '>
            {MenuList.map((item,index)=>(
                <div className={`flex gap-2 mb-2 p-3 hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer items-center ${path==item.path && "bg-purple-600"}`} key={index}>
                    <item.icon className='text-destructive ' />
                    <Link href={item.path}>
                    <h2 className='font-semibold text-lg'>{item.name} </h2>
                     </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav