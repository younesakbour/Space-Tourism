"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Wrapper({children, pageProps}) {
    const path = usePathname()
    const wrapperVariants = {
        hidden: {
            opacity: 0,
            y: -40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "easeInOut",
                duration: .3
            }
        },
        exit: {
            opacity: 0,
            y: 40,
            scale: 0.4,
            transition: {
                ease: "easeInOut",
                duration: .4
            }
        }
    }
  return (
    <AnimatePresence mode="wait">
        <motion.div
            variants={wrapperVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            {...pageProps} key={path}
        >
            {children}
        </motion.div>
    </AnimatePresence>
  )
}
