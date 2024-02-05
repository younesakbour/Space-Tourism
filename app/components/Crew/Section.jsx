"use client"
import { motion } from "framer-motion"
import { barlow_condensed, bellefair } from "@/utils/fonts"
import Image from "next/image"

export default function Section() {
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
  return (
    <div className='h-screen w-full lg:max-w-[1280px] pt-24 md:pt-32 px-8 lg:pt-[10em] mx-auto max-h-screen flex flex-col items-center md:items-start'>
      <div className='flex gap-4 md:text-xl lg:text-[28px] uppercase tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] px-8'><span className='opacity-25'>02</span><h2>Meet your crew</h2></div>
      <div className='h-full w-full flex flex-col-reverse md:flex-col lg:flex-row items-center lg:items-end md:justify-end md:px-8 lg:px-0'>
        <div className="w-full h-full md:h-fit lg:h-[90%] lg:w-[55%] flex flex-col-reverse justify-end lg:justify-between md:flex-col py-4 lg:py-16">
          <div className={`${bellefair.className} w-full md:px-16 lg:pl-12 space-y-3 md:space-y-6 lg:space-y-10 text-center lg:text-start pt-6 md:pt-0`}>
            <div className="md:space-y-3 lg:space-y-8">
              <h3 className="text-base md:text-2xl lg:text-[32px] uppercase opacity-50">{crews[3].position}</h3>
              <h2 className="text-2xl md:text-[40px] lg:text-[56px] uppercase">{crews[3].name}</h2>
            </div>
            <p className={`${barlow_condensed.className} text-[15px] md:text-[16px] lg:text-[18px] leading-7 md:px-4 lg:px-0 lg:leading-8 lg:w-[70%] text-primary`}>{crews[3].descr}</p>
          </div>
          <div className="w-full md:px-16 lg:pl-12 flex gap-3 lg:gap-6 justify-center lg:justify-start md:py-6 lg:py-0">
            {crews.map((e, ind) => (
              <button className="bg-white opacity-[17.44%] p-[6px] rounded-full" key={ind}></button>
            ))}
          </div>
        </div>
        <div className="w-[70%] md:w-full lg:w-[45%] h-full md:h-[60%] lg:h-[90%] relative">
          <Image className="w-full absolute" layout="fill" objectFit="contain" src={crews[3].image} />
        </div>
      </div>
    </div>
  )
}

