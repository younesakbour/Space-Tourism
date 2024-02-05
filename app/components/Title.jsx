"use client"
import { bellefair } from "@/utils/fonts"
import { motion } from "framer-motion"
import { titleVariants } from "@/utils/animation"

export default function Title({title, myClass, delay}) {
  return (
    <motion.h1 className={`${bellefair.className} ${myClass}`}
        initial="hidden"
        animate="visible"
        transition={{staggerChildren: .3, delayChildren: delay}}
    >{
        title.split("").map(letter => (
            <motion.span
                variants={titleVariants}
            >{letter}</motion.span>
        ))
    }</motion.h1>
  )
}
