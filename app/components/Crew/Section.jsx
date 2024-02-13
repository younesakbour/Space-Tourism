"use client"
import { motion, AnimatePresence } from "framer-motion"
import { barlow, bellefair } from "@/utils/fonts"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Section() {
  const [index, setIndex] = useState(3)
  const crews = [
    {
      position: "Commander",
      name: "Douglas Hurley",
      descr: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266025/front-end/space-tourism-website/crew/mve6ybbvdcywggfb91q4.webp",
    },
    {
      position: "Mission Specialist",
      name: "MARK SHUTTLEWORTH",
      descr: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266038/front-end/space-tourism-website/crew/ktxc0v6u4gf4f0mc73uy.webp",
    },
    {
      position: "PILOT",
      name: "Victor Glover",
      descr: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266052/front-end/space-tourism-website/crew/ixe48cijoxywfvyt6xi3.webp",
    },
    {
      position: "Flight Engineer",
      name: "Anousheh Ansari",
      descr: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266055/front-end/space-tourism-website/crew/av4dcfdohxpt3x5sdavm.webp",
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
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: .5
      }
    },
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === crews.length - 1) {
          setIndex(0)
          return
      }

      setIndex(index + 1)
    }, 10000)

    return () => clearInterval(interval)
  }, [index])
  return (
    <div className='min-h-screen w-full overflow-scroll lg:overflow-hidden lg:max-w-[1280px] pt-24 md:pt-32 px-8 lg:pt-[10em] mx-auto max-h-screen flex flex-col items-center md:items-start'>
      <div className='flex gap-4 md:text-xl lg:text-[28px] uppercase tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] px-8'><span className='opacity-25'>02</span><h2>Meet your crew</h2></div>
      <AnimatePresence mode="wait">
      <div className='h-full md:h-screen w-full flex flex-col-reverse md:flex-col lg:flex-row items-center lg:items-end md:justify-end pt-3 md:pt-0 md:px-8 lg:px-0'>
        <div className="w-full h-full md:h-fit lg:h-[90%] lg:w-[70%] flex flex-col-reverse justify-end lg:justify-between md:flex-col py-4 lg:py-16">
          <motion.div key={crews[index].position} className={`${bellefair.className} [--y-from:-20px] lg:[--y-from:0] lg:[--x-from:-50px] w-full md:px-16 lg:pl-12 space-y-3 md:space-y-6 lg:space-y-10 text-center lg:text-start pt-6 md:pt-0`}
            variants={divVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="md:space-y-3 lg:space-y-8">
              <h3 className="text-base md:text-2xl lg:text-[32px] uppercase opacity-50">{crews[index].position}</h3>
              <h2 className="text-2xl md:text-[40px] lg:text-[56px] uppercase">{crews[index].name}</h2>
            </div>
            <p className={`${barlow.className} lg:pr-16 text-[15px] md:text-[16px] lg:text-[18px] leading-7 lg:leading-8 lg:w-[80%] text-primary`}>{crews[index].descr}</p>
          </motion.div>
          <div className="w-full md:px-16 lg:pl-12 flex gap-3 lg:gap-6 justify-center lg:justify-start pt-3 md:py-6 lg:py-0">
            {crews.map((e, ind) => (
              <button onClick={() => setIndex(ind)} className={`bg-white ${ index === ind ? "" : "opacity-[17.44%]"} p-[6px] rounded-full`} key={ind}></button>
            ))}
          </div>
        </div>
        <motion.div key={crews[index].position} className="w-[70%] md:w-full lg:w-[45%] h-[32vh] md:h-[60%] lg:h-[90%] relative"
          variants={ImageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image className="w-full absolute" layout="fill" objectFit="contain" src={crews[index].image} alt={crews[index].position}/>
        </motion.div>
      </div>
      </AnimatePresence>
    </div>
  )
}

