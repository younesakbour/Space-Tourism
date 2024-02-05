"use client"
import { motion } from "framer-motion"

export default function Section() {
  return (
    <div className='h-screen w-full lg:max-w-[1280px] pt-24 md:pt-32 lg:pt-[10em] mx-auto lg:p-8 max-h-screen flex flex-col items-center md:items-start'>
      <div className='flex gap-4 md:text-xl lg:text-[28px] uppercase tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]'><span className='opacity-25'>03</span><h2>SPACE LAUNCH 101</h2></div>
      <div className='h-full w-full flex flex-col-reverse lg:flex-row bg-white items-center justify-center lg:justify-start'>
        <div className="w-full lg:h-36 lg:w-[60%] flex flex-col lg:flex-row px-8 lg:px-0">
          <div className="w-full h-8 lg:h-full lg:w-[20%] bg-green-600"></div>
          <div className="w-full h-32 lg:h-full lg:w-[80%] bg-red-600"></div>
        </div>
        <div className="w-full lg:absolute right-0 lg:w-[40%] h-36 lg:h-64 bg-yellow-600"></div>
      </div>
    </div>
  )
}