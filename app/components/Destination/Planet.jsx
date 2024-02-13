"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Text from '../Text'
import Title from '../Title'
import { bellefair } from "@/utils/fonts"
import { useState } from "react"

export default function Planet({el}) {
    const [index, setIndex] = useState(0)

    const names = ["moon", "mars", "europa", "titan"]
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

    const linkVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.1,
            }
        }
    }

    const hoverVariants = {
        hidden: {
            width: "var(--w-from, 0)",
        },
        visible: {
            width: "var(--w-to, 4px)",
            transition: {
                ease: "easeInOut",
                duration: 0.2
            }
        }
    }

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: .8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: "easeIn",
                duration: .5
            }
        },
    }
    return (
        <AnimatePresence mode="wait">
            <div className='min-w-full pt-10 flex flex-col lg:flex-row justify-between'>
                <motion.div key={destinationArray[index].title} variants={imageVariants} initial="hidden" animate="visible" className="max-lg:w-full w-1/2 flex justify-center items-center">
                    <Image
                        width={445}
                        height={445}
                        className="w-1/2 md:w-1/4 lg:w-[60%]"
                        src={destinationArray[index].image}
                        alt={destinationArray[index].title}
                    />
                </motion.div>
                <div className="max-md:w-full flex flex-col items-center pt-4 lg:pt-0 lg:w-1/2">
                    <div className="px-0 md:px-36 lg:px-0 lg:w-[410px] text-center lg:text-start">
                        <motion.div key={destinationArray[index].title}>
                            {/* Header Start */}
                            <div className="w-full flex justify-center lg:justify-start">
                                <ul className="flex gap-4 md:gap-8 uppercase tracking-[2.7px] text-primary md">
                                    {
                                        names.map((e, ind) => (
                                            <button onClick={() => setIndex(ind)} className="h-full relative select-none" key={ind}>
                                                <motion.li
                                                    variants={linkVariants}
                                                    whileHover="visible"
                                                    className='py-3 h-full flex flex-col'>
                                                    <p className='pl-0 text-base lg:text-base uppercase'>{e}</p>
                                                    <motion.div 
                                                        variants={hoverVariants}
                                                        className={`bg-white ${ind === index ? "!w-full bg-opacity-100" : "bg-opacity-50"} absolute right-0 bottom-0 h-[0.15em] ![--w-from:0%] [--w-to:100%] self-end`}></motion.div>
                                                </motion.li>
                                            </button>
                                        ))
                                    }
                                </ul>
                            </div>
                            {/* Header End */}
                            <Title title={destinationArray[index].title} delay={.3} myClass="text-[56px] md:text-[100px] pt-3" />
                            <Text text={destinationArray[index].par} textJustify={false} delay={.8} />
                        </motion.div>
                        <hr className="w-full mt-6 lg:mt-12 mb-6" />
                        <div className="md:flex justify-center lg:justify-start gap-16 space-y-6 md:space-y-0 pb-6">
                            <div className="text-center md:text-start">
                                <h5 className="text-sm text-primary tracking-[2.36px]">AVG. DISTANCE</h5>
                                <motion.h4 key={destinationArray[index].title} initial={{opacity: 0, x: 10}} animate={{opacity: 1, x: 0}} transition={{ease: "linear", duration: .3}} className={`${bellefair.className} uppercase text-[28px]`}>{destinationArray[index].avg}</motion.h4>
                            </div>
                            <div className="text-center md:text-start">
                                <h5 className="text-sm text-primary tracking-[2.36px] uppercase">Est. travel time</h5>
                                <motion.h4 key={destinationArray[index].title} initial={{opacity: 0, x: 10}} animate={{opacity: 1, x: 0}} transition={{ease: "linear", duration: .3}} className={`${bellefair.className} uppercase text-[28px]`}>{destinationArray[index].est}</motion.h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    )
}
