"use client"
import { features } from '@/Data/Constants'
import { SignInButton, useUser } from '@clerk/nextjs'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
  const {user} = useUser()
  return (
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-200 via-white to-white">
      
      {/* background blur circle */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-300/10 blur-[200px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2  border rounded-full px-4 py-1 text-sm shadow-sm mb-6">
          <span className="bg-indigo-600 text-white px-2 py-[2px] rounded-full text-xs">
            New
          </span>
          <p className=" font-medium">
            We’ve just released a new feature →
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Boost Your{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Productivity
          </span>
          , <br />
          Simplify Your Life
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
          Generate high-quality content in seconds using AI. Create blogs,
          captions, emails, and more with a simple workflow.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          {!user ? (
          <SignInButton mode="modal">
            <button className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-md hover:scale-[0.97] active:scale-105 transition">
              Get Started
            </button>
          </SignInButton>
        ) : (
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-md hover:scale-[0.97] active:scale-105 transition"
          >
            Get Started
          </Link>
        )}

          
<div className="p-[1px] rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400">
  <button className="px-6 py-3 rounded-full bg-white text-indigo-600 font-medium hover:bg-indigo-50 transition flex items-center gap-2">
    <Sparkles className="h-5 w-5 text-red-400" />
    Preview Platform
  </button>
</div>
        </div>

        {/* Dashboard Image */}
        <div className="mt-14 flex justify-center" >
          <div className="relative w-full max-w-4xl rounded-2xl border bg-white shadow-xl overflow-hidden">
            <Image
              src="/dashboard1.png"   // 👉 replace with your image path
              alt="dashboard preview"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">

              {/* icon */}
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                {item.icon}
              </div>

              {/* title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* description */}
              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>

              {/* learn more */}
              <a
                href="#"
                className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more →
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>


    </section>
  )
}

export default HeroSection