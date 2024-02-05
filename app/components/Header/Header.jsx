"use client"
import Nav from "./Nav"
import Logo from "@/icons/Logo"
import { motion } from "framer-motion"
import { iconVariants } from "@/utils/animation"

function Header() {
  const lineVariants = {
    hidden: {
        opacity: 0,
        x: -140,
        width: "var(--w-from, 0)"
    },
    visible: {
        opacity: 0.1,
        x: 0,
        width: "var(--w-to, 0)",
        transition: {
            ease: "easeInOut",
            duration: .8
        }
    }
  }

  return (
    <header className="fixed z-50 w-full flex justify-between items-start md:items-center text-white md:pt-0 lg:pt-10">
        <motion.div className="w-[30%] pt-6 md:pt-0 pl-6 md:pl-16"
          variants={iconVariants("left")}
          initial="hidden"
          animate="visible"
        ><Logo /></motion.div>
        <motion.div variants={lineVariants} className='absolute z-50 left-[12%] hidden lg:block lg:[--w-from:5%] lg:[--w-to:30%] h-1 bg-white'
          initial="hidden"
          animate="visible"
        ></motion.div>
        <Nav />
    </header>
  )
}

export default Header