"use client"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useRef, useState, useEffect } from "react"
import Menu from "@/icons/Menu"
import Close from "@/icons/Close"
import { iconVariants } from "@/utils/animation"


function Nav() {
    const [open, setOpen] = useState(false)
    const path = usePathname()
    const ref = useRef()
    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (open && ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
    
        setTimeout(() => {
            window.addEventListener('click', handleClickOutside)
        }, 1000);
    
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [open, ref])
    

    const navVariants = {
        hidden: {
            opacity: 0,
            x: 20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            x: 40,
            transition: {
                duration: .3,
                ease: "easeInOut"
            }
        }
    }

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
            opacity: .5
        },
        visible: {
            width: "var(--w-to, 4px)",
            opacity: .5,
            transition: {
                ease: "easeInOut",
                duration: 0.3
            }
        }
    }

    const links = [
        {href: "/", name: "HOME"},
        {href: "/destination", name: "DESTINATION"},
        {href: "/crew", name: "CREW"},
        {href: "/technology", name: "TECHNOLOGY"},
    ]

  return (
    <>
    <AnimatePresence mode="wait">
    <motion.div className={`${open ? "hidden" : ""} md:hidden pt-6 pr-6 self-center`}
        variants={iconVariants("right")}
        initial="hidden"
        animate="visible"
        exit="hidden"
    >
        <button onClick={() => setOpen(true)}><Menu classIcon={"scale-150"} /></button>
    </motion.div>
    <motion.nav ref={ref} key={open} className={`${open ? "block" : "hidden"} md:flex tracking-[2.7px] z-40 font-lightitems-center w-[65%] md:w-[60%] h-screen md:h-[96px] bg-white bg-opacity-[4%] backdrop-blur-3xl`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        <motion.div className={`${open ? "" : "hidden"} md:hidden p-8 w-full flex justify-end`}
            variants={iconVariants("right")}
            initial="hidden"
            animate="visible"
        >
            <button onClick={() => setOpen(false)}><Close classIcon={"scale-150"} /></button>
        </motion.div>
        <ul className='flex pt-16 md:pt-0 flex-col md:flex-row space-y-10 md:space-y-0 md:justify-evenly lg:justify-center lg:gap-12 md:items-end md:w-full h-full lg:w-[90%]'>
            {
                links.map((e, index) => (
                    <Link className="md:h-full relative select-none" key={index} href={e.href}>
                        <motion.li
                            variants={linkVariants}
                            whileHover="visible"
                            className='md:py-8 h-full flex md:flex-col'>
                            <p className='pl-8 md:pl-0 text-base md:text-sm lg:text-base'><span className='inline pr-3 md:hidden lg:inline lg:pr-3 font-bold'>0{index}</span>{e.name}</p>
                            <motion.div 
                                variants={hoverVariants}
                                className={`bg-white ${path === e.href ? "max-sm:h-full md:!w-full bg-opacity-100" : ""} absolute right-0 md:bottom-0 max-sm:w-1 md:h-1 md:![--w-from:0%] md:[--w-to:100%] self-end`}></motion.div>
                        </motion.li>
                    </Link>
                ))
            }
        </ul>
    </motion.nav>
    </AnimatePresence>
    </>
  )
}

export default Nav