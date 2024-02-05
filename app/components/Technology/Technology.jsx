import Image from "next/image"
import Wrapper from "../Wrapper"
import Section from "./Section"

function Technology() {
  return (
    <div>
        <Image className="-z-10 select-none hidden lg:block" layout="fill" src="https://res.cloudinary.com/daxdgprva/image/upload/v1705266150/front-end/space-tourism-website/technology/dcsnwltl4lovfjfo7nyr.jpg" />
        <Image className="-z-10 select-none hidden md:block lg:hidden" layout="fill" src="https://res.cloudinary.com/daxdgprva/image/upload/v1705266147/front-end/space-tourism-website/technology/vxhcuhxcd3k4hr32dmq4.jpg" />
        <Image className="-z-10 select-none block md:hidden h-screen" layout="fill" src="https://res.cloudinary.com/daxdgprva/image/upload/v1705266142/front-end/space-tourism-website/technology/xwdtfzsciz64ckuhcnhr.jpg" />
        <Wrapper>
          <Section />
        </Wrapper>
    </div>
  )
}

export default Technology