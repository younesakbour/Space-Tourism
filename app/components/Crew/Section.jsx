"use client"
import { motion } from "framer-motion"

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

