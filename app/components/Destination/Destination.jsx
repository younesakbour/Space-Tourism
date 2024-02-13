import Image from "next/image"
import Wrapper from "../Wrapper"
import Section from "./Section"

function Destination() {
  return (
    <div>
        <Image priority={true} className="-z-10 select-none hidden lg:block" layout="fill" src="https://res.cloudinary.com/daxdgprva/image/upload/v1705266257/front-end/space-tourism-website/destination/ax84cgxfg6aexbxt7vxk.jpg" />
        <Image priority={true} className="-z-10 select-none hidden md:block lg:hidden" layout="fill" src="https://res.cloudinary.com/daxdgprva/image/upload/v1705266062/front-end/space-tourism-website/destination/ds0hjrf9utwlsaccfjm5.jpg" />
        <Image priority={true} className="-z-10 select-none block md:hidden h-screen" layout="fill" src="https://res.cloudinary.com/daxdgprva/image/upload/v1705266059/front-end/space-tourism-website/destination/fat8nj9k1xdanfrqb2ez.jpg" />
        <Wrapper>
          <Section />
        </Wrapper>
    </div>
  )
}

export default Destination