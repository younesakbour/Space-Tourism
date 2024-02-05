"use client"
import { motion } from "framer-motion"

export default function Section() {
  return (
    <div className='h-screen w-full lg:max-w-[1280px] pt-24 md:pt-32 lg:pt-[10em] mx-auto p-8 md:p-0 max-h-screen flex flex-col items-center md:items-start'>
      <div className='flex gap-4 md:text-xl lg:text-[28px] uppercase tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] p-8'><span className='opacity-25'>02</span><h2>Meet your crew</h2></div>
      <div className='h-full w-full flex flex-col-reverse md:flex-col lg:flex-row bg-white items-end md:justify-end md:px-8 lg:px-0'>
        <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-col lg:py-8">
          <div className="w-full h-24 bg-red-600"></div>
          <div className="w-full h-8 bg-green-600"></div>
        </div>
        <div className="w-full lg:w-1/2 h-24 bg-yellow-600"></div>
      </div>
    </div>
  )
}

