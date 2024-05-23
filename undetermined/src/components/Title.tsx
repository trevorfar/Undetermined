import MaxWidthWrapper from "./MaxWidthWrapper"
import cover from "../../public/cover.jpg"

import Image from "next/image"
const Title = () => {
  return (
    <div id="title" className="relative">
      <div>
        <Image
          src={cover}
          className=""
          alt="designed by freepik"
          
        />
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full text-center">
      <h1 className="text-4xl text-white">Welcome</h1>
      </div>
    </div>
  )
}

export default Title
