"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Header({header}) {
    const names = ["moon", "mars", "europa", "titan"]

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
                duration: 0.3
            }
        }
    }

    return (
        <div className="w-full flex justify-center lg:justify-start">
            <ul className="flex gap-4 md:gap-8 uppercase tracking-[2.7px] text-primary md">
                {
                    names.map((e, index) => (
                        <button className="h-full relative select-none" key={index}>
                            <motion.li
                                variants={linkVariants}
                                whileHover="visible"
                                className='py-3 h-full flex flex-col'>
                                <p className='pl-0 text-base lg:text-base'>{e.name}</p>
                                <motion.div 
                                    variants={hoverVariants}
                                    className={`bg-white ${e.href === header ? "!w-full bg-opacity-100" : "bg-opacity-50"} absolute right-0 bottom-0 h-[0.15em] ![--w-from:0%] [--w-to:100%] self-end`}></motion.div>
                            </motion.li>
                        </button>
                    ))
                }
            </ul>
        </div>
    )
}
