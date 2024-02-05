export const iconVariants = (direction) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -20 : 20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: "linear"
        }
    }
  })

export const titleVariants = {
  hidden: {
      opacity: 0,
      y: 20,
      scale: 2,
  },
  visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
          duration: 2
      }
  },
}

export const primaryCircle = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 160,
      damping: 10,
      mass: 0.75,
    }
  }
}

export const seconderyCircle = {
  hidden: {
    scale: 0,
    transition: {
      duration: 2,
      type: "spring",
    }
  },
  hover: {
    scale: 1.5,
    transition: {
      type: "spring",
      stiffness: 160,
    }
  },
}

export const textVariants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    opacity: 1,
    x:0,
    transition: {
      duration: .5,
      ease: "easeIn"
    }
  }
}