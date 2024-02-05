"use client"
import { motion } from "framer-motion"

export default function Section() {
  const technologies = [
    {
      name: "LAUNCH VEHICLE",
      descr: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      imagePortrait: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266185/front-end/space-tourism-website/technology/mwdcttweiikrhfz4fch7.jpg",
      imageLandscape: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266149/front-end/space-tourism-website/technology/kw2qyja0f8u3fmpjlnta.jpg",
    },
    {
      name: "SPACEPORT",
      descr: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      imagePortrait: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266247/front-end/space-tourism-website/technology/ixs159v7nn7xjmdak8sl.jpg",
      imageLandscape: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266176/front-end/space-tourism-website/technology/jnjmdzme515vsup9ypv2.jpg",
    },
    {
      name: "SPACE CAPSULE",
      descr: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      imagePortrait: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266156/front-end/space-tourism-website/technology/ukyyrfibmcqshes2nwgf.jpg",
      imageLandscape: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266184/front-end/space-tourism-website/technology/mfrnvrvn5amgpmrfuqic.jpg",
    },
  ]
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