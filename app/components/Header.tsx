'use client'
import Image from 'next/image'
import Link from 'next/link'
import {Home, Wallet} from "lucide-react"
import React from 'react'
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import UserDropDown from './UserDropDown'

const Header = () => {
  const {user} = useUser()
  return (
    <header className='fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 '>
        <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
            {/* logo */}
           <Link href={"/"} className="flex items-center gap-2">
            <Image src={"/content-logo.png"} alt=''
            width={60}
            height={60}
            className="w-16"
            />
           
           </Link>
           
            {/* Nav links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <Link
            href="/"
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <Link
            href="/Pricing"
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <Wallet className="w-4 h-4" />
            Pricing
          </Link>
        </div>
 
    
         {!user? <SignInButton mode='modal'>
         <Button > Get Started </Button>
      </SignInButton>:
      <div className='flex gap-4 items-center '>
      <Link href={"/dashboard"}>
      <Button className="bg-destructive "> Get Started</Button>
      </Link>
       <UserDropDown/>

      </div>
}

        </nav>


    </header>
  )
}

export default Header