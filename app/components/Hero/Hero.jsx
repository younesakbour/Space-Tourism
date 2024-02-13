import Image from "next/image"
import Wrapper from "../Wrapper"
import Section from "./Section"

function Hero() {
  return (
    <div>
        <Image priority={true} className="-z-10 select-none hidden lg:block" layout="fill" src="https://res.cloudinary.com/daxdgprva/image/upload/v1705266198/front-end/space-tourism-website/home/pjsoadwkbxfdtkobskzg.jpg" />
        <Image priority={true} className="-z-10 select-none hidden md:block lg:hidden" layout="fill" src="https://res.cloudinary.com/daxdgprva/image/upload/v1705266180/front-end/space-tourism-website/home/amyhyw6ijwsythyzln3z.jpg" />
        <Image priority={true} className="-z-10 select-none block md:hidden h-screen" layout="fill" src="https://res.cloudinary.com/daxdgprva/image/upload/v1705266140/front-end/space-tourism-website/home/rgrik0dq24dftfrbcrwv.jpg" />
        <Wrapper>
          <Section />
        </Wrapper>
    </div>
  )
}

export default Hero