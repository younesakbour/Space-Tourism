"use client"
import { bellefair } from "@/utils/fonts"
import { motion } from "framer-motion"
import Title from "../Title"
import { primaryCircle, seconderyCircle } from "@/utils/animation"
import { useState } from "react"
import Text from "../Text"
import Link from "next/link"

export default function Section() {
    const [isHovered, setHovered] = useState(false)
    const headingTwoVariants = {
        visible: {
            x: ["100%", "-100%"],
            transition: {
                ease: "linear",
                duration: 4,
                repeat: Infinity,
                repeatDelay: 0,
            }
        }
    }

    const text = "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"

  return (
    <div className="w-full p-8 lg:pb-32 h-screen flex flex-col lg:flex-row justify-around items-center lg:items-end">
      <div className="lg:w-1/2 flex justify-center">
        <div className="md:w-[420px] text-center lg:text-start pt-0 md:pt-8 lg:pt-0 max-sm:leading-[6em] max-lg:leading-[10em] overflow-hidden"
        >
          <motion.h2 className="md:text-xl lg:text-2xl text-primary tracking-[4.75px]"
            variants={headingTwoVariants}
            animate="visible"
          >SO, YOU WANT TO TRAVEL TO</motion.h2>
          <Title title="SPACE" delay={1} myClass="text-[80px] md:text-[150px]" />
          <Text text={text} textJustify={true} delay={2} />
        </div>
      </div>
      <Link href="/destination" className="lg:w-1/2 flex justify-center select-none">
        <motion.div className="bg-white bg-opacity-50 w-[140px] h-[140px] lg:w-[240px] lg:h-[240px] rounded-full z-0 relative"
          variants={seconderyCircle}
          animate={isHovered ? "hover" : "hidden"}
        ></motion.div>
        <motion.div className={`bg-white w-[140px] h-[140px] lg:w-[240px] lg:h-[240px] rounded-full flex justify-center items-center absolute cursor-pointer`}
          variants={primaryCircle}
          initial="hidden"
          animate="visible"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <p className={`${bellefair.className} uppercase text-xl lg:text-[32px] tracking-[2px] text-second`}>Explore</p>
        </motion.div>
      </Link>
    </div>
  )
}
