import MaxWidthWrapper from "./MaxWidthWrapper"
import cover from "../../public/cover.jpg"
import Image from "next/image"
import { AspectRatio } from "./ui/aspect-ratio"
import  TitleScreen  from "./ui/TitleScreen"
const Title = () => {
  const TitleWords = ["Performance", "Speed", "Quality"]
  return (
    <section id="title" className="bg-gradient-to-b from-gray-500 to-gray-50">

      <div className="p-24 flex justify-center items-center mx-auto">
      <TitleScreen titles={TitleWords} />
      </div>
    </section>
  )
}

export default Title
