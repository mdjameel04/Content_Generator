import { PricingTable } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-100 via-indigo-50 to-white pt-24 pb-16">

      {/* ⭐ MAIN BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div
          className="
            w-[1000px] h-[1000px]
            md:w-[1400px] md:h-[1400px]
            lg:w-[1800px] lg:h-[1800px]
            rounded-full
            bg-indigo-500/30
            blur-[160px]
          "
        />
      </div>

      {/* ⭐ EXTRA SOFT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-300/20 blur-[200px] z-10"></div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Small badge */}
        <div className="inline-flex items-center gap-2 bg-white/70 border px-4 py-1 rounded-full shadow-sm mb-6">
          <span className="text-xs bg-indigo-500 text-white px-2 py-0.5 rounded-full">
            New
          </span>
          <p className="text-sm text-gray-600">
            We’ve just released a new feature →
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Boost Your{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            Productivity
          </span>
          , <br />
          Simplify Your Life
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-6 text-gray-500">
          Create AI content faster and manage your workflow with a modern SaaS
          platform designed for creators and teams.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-lg hover:scale-105 active:scale-95 transition">
            Get Started
          </button>

         <div className="p-[1px] rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400">
  <button className="px-6 py-3 rounded-full bg-white text-indigo-600 font-medium hover:bg-indigo-50 transition flex items-center gap-2">
    <Sparkles className="h-5 w-5 text-red-400" />
    Preview Platform
  </button>
</div>
        </div>

        {/* Dashboard Image (enable when ready) */}
        
        <div className="mt-14 rounded-2xl border bg-white shadow-xl p-2">
        </div>
      </div>

      <PricingTable  checkoutProps={{
        appearance:{
          elements:{
            drawerRoot:{
              zIndex:2000,
            }
          }
        }
      }}/>
    </section>
  );
};

export default HeroSection;