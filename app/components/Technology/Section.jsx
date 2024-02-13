"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { bellefair, barlow } from "@/utils/fonts"
import { useState } from "react"

export default function Section() {
  const [index, setIndex] = useState(0)
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

  const divVariants = {
    hidden: {
      opacity: 0,
      x: "var(--x-from, 0)",
      y: "var(--y-from, 0)"
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: .5
      }
    },
  }

  const ImageVariants = {
    hidden: {
      opacity: 0,
      y: "var(--yImage-from, 0)",
      x: "var(--xImage-from, 0)"
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: .5
      }
    },
  }

  return (
    <div className='min-h-screen overflow-scroll md:overflow-hidden w-full lg:max-w-[1280px] pt-24 md:pt-32 lg:pt-[10em] lg:px-12 mx-auto lg:p-8 max-h-screen flex flex-col items-center md:items-start'>
      <div className='flex gap-4 md:text-xl lg:text-[28px] uppercase tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] px-8'><span className='opacity-25'>03</span><h2>SPACE LAUNCH 101</h2></div>
      <AnimatePresence mode="wait">
      <div className='h-full md:h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start py-6 md:pt-0'>
        <div className="w-full lg:h-[40vh] md:w-[75%] lg:w-[60%] flex flex-col lg:flex-row px-8 lg:px-0">
          <div className="w-full py-6 md:py-10 lg:py-0 lg:h-full flex lg:flex-col gap-3 lg:gap-0 items-center justify-center lg:justify-between lg:w-[20%] select-none">
            {technologies.map((e, ind) => (
              <button onClick={() => setIndex(--ind)} className={`${bellefair.className} border-[2px] ${index === ind ? "border-white bg-white text-black cursor-default" : "border-white border-opacity-25 duration-300 ease-in-out hover:bg-white hover:text-black"} w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] flex justify-center items-center rounded-full text-[16px] md:text-[24px] lg:text-[32px] tracking-[1px] md:tracking-[2px]`}>{++ind}</button>
            ))}
          </div>
          <motion.div key={technologies[index].name} className="w-full h-full lg:w-[80%] [--y-from:-20px] lg:[--y-from:0] lg:[--x-from:-50px] space-y-3 md:space-y-8 lg:space-y-0 lg:pl-8 flex flex-col justify-between items-center lg:items-start text-center lg:text-start"
            variants={divVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-1 md:space-y-6 lg:space-y-6">
              <h3 className="text-sm md:text-base tracking-[2.36px] text-primary">THE TERMINOLOGY…</h3>
              <h2 className={`${bellefair.className} text-2xl md:text-[40px] lg:text-[56px]`}>{technologies[index].name}</h2>
            </div>
            <p className={`${barlow.className} text-[15px] md:text-lg text-primary md:w-[90%] lg:w-[80%] md:leading-7 lg:leading-8`}>{technologies[index].descr}</p>
          </motion.div>
        </div>
        <motion.div key={technologies[index].name} className={`relative [--yImage-from:20px] lg:[--yImage-from:0] lg:[--xImage-from:30px] w-full lg:absolute right-0 lg:w-[30%] h-[25vh] lg:h-[60vh]`}
          variants={ImageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            className="hidden lg:block"
            src={technologies[index].imagePortrait}
            layout="fill"
          />
          <Image
            className="lg:hidden"
            src={technologies[index].imageLandscape}
            layout="fill"
          />
        </motion.div>
      </div>
      </AnimatePresence>
    </div>
  )
}