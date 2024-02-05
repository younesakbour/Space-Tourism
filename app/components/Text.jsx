"use client"
import { textVariants } from "@/utils/animation"
import { motion } from "framer-motion"

export default function Text({text, textJustify, delay}) {
    return (
        <motion.p className={`text-primary text-sm md:text-lg tracking-wider leading-8 ${textJustify ? "lg:text-justify" : ""}`}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.01, delayChildren: delay}}
        >
            {
                text.split("").map((letter, index) => (
                    <motion.span className={letter === " " ? "inline-block" : ""} key={index}
                        variants={textVariants}
                    >{letter === " " ? "\u00A0" : letter}</motion.span>
                ))
            }
        </motion.p>
    )
}
