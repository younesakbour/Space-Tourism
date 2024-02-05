"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Header from "./Header"
import Title from "../Title"
import Text from "../Text"
import { bellefair } from "@/utils/fonts"

export default function Section() {
  const destinationArray = [
    {
      image: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266091/front-end/space-tourism-website/destination/tjsdwwblmvhpcmtfsam9.webp",
      title: "MOON",
      header: "#moon",
      par: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avg: "384,400 km",
      est: "3 days"
    },
    {
      image: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266072/front-end/space-tourism-website/destination/eadgxq0yopadtld3sqaf.webp",
      title: "MARS",
      header: "#mars",
      par: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avg: "225 MIL. km",
      est: "9 months"
    },
    {
      image: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266068/front-end/space-tourism-website/destination/f3mjd2tqyvgqhu5rftkm.webp",
      title: "EUROPA",
      header: "#europa",
      par: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avg: "628 MIL. km",
      est: "3 years"
    },
    {
      image: "https://res.cloudinary.com/daxdgprva/image/upload/v1705266131/front-end/space-tourism-website/destination/y11nh2esvrjdazb8c50x.webp",
      title: "TITAN",
      header: "#titan",
      par: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avg: "1.6 BIL. km",
      est: "7 years"
    },
  ]

  return (
    <div className='w-full lg:max-w-[1280px] pt-24 md:pt-32 lg:pt-[10em] mx-auto p-8 max-h-screen flex flex-col items-center md:items-start'>
      <div className='flex gap-4 md:text-xl lg:text-[28px] uppercase tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]'><span className='opacity-25'>01</span><h2>Pick your destination</h2></div>
      <div className="w-full lg:max-w-[1280px] flex overflow-x-hidden md:scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-slate-500">
        {destinationArray.map((e, index) => (
          <div id={e.header.slice(1)} key={index} className='min-w-full pt-10 flex flex-col lg:flex-row justify-between'>
            <div className="max-lg:w-full w-1/2 flex justify-center items-center">
              <Image
                width={445}
                height={445}
                className="w-1/2 md:w-1/4 lg:w-[60%]"
                src={e.image}
                alt={e.title}
              />
            </div>
            <div className="max-md:w-full flex flex-col items-center pt-4 lg:pt-0 lg:w-1/2">
              <div className="px-0 md:px-36 lg:px-0 lg:w-[410px] text-center lg:text-start">
                <div>
                    <Header header={e.header} />
                    <Title title={e.title} delay={.3} myClass="text-[56px] md:text-[100px] pt-3" />
                    <Text text={e.par} textJustify={false} delay={.8}/>
                  </div>
                  <hr className="w-full mt-6 lg:mt-12 mb-6"/>
                  <div className="md:flex justify-center lg:justify-start gap-16 space-y-6 md:space-y-0">
                    <div className="text-center md:text-start">
                      <h5 className="text-sm text-primary tracking-[2.36px]">AVG. DISTANCE</h5>
                      <h4 className={`${bellefair.className} uppercase text-[28px]`}>{e.avg}</h4>
                    </div>
                    <div className="text-center md:text-start">
                      <h5 className="text-sm text-primary tracking-[2.36px] uppercase">Est. travel time</h5>
                      <h4 className={`${bellefair.className} uppercase text-[28px]`}>{e.est}</h4>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
