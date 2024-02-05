import Image from "next/image"
import Wrapper from "../Wrapper"
import Section from "./Section"

function Crew() {
  return (
    <div>
        <Image className="-z-10 select-none hidden lg:block" layout="fill" src="https://res.cloudinary.com/daxdgprva/image/upload/v1705266022/front-end/space-tourism-website/crew/yrx9njzivfmzs8hjcqlk.jpg" />
        <Image className="-z-10 select-none hidden md:block lg:hidden" layout="fill" src="https://res.cloudinary.com/daxdgprva/image/upload/v1705266020/front-end/space-tourism-website/crew/sichhlzk7vsquyuohgjr.jpg" />
        <Image className="-z-10 select-none block md:hidden h-screen" layout="fill" src="https://res.cloudinary.com/daxdgprva/image/upload/v1705266020/front-end/space-tourism-website/crew/vmbjza0fintsjxzz1tmt.jpg" />
        <Wrapper>
          <Section />
        </Wrapper>
    </div>
  )
}

export default Crew