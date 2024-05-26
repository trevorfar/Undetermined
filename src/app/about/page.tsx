"use client"
import CheckoutButton from "@/components/CheckoutButton"
import { Separator } from "@/components/ui/separator"
const About = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-bottom-half">
      <div className=" w-full">
      <div className="my-auto flex flex-col gap-4 mx-auto justify-center items-center ">
        <h1 className="font-serif text-4xl md:pt-14">
          Our Mission
        </h1>
        <div className="bg-gradient-to-top-half w-full">
          <p className="text-muted-foreground bg-gray-200  p-4 font-serif">
            At Veloce, our journey began with a simple yet
            ambitious vision: to redefine the driving experience by blending
            cutting-edge technology with timeless design. When we first set out,
            we faced countless challenges, from conceptualizing innovative
            features to ensuring the highest standards of safety and
            sustainability. However, our unwavering commitment to excellence and
            our passion for engineering excellence fueled our progress. We
            believed that a car should not just be a mode of transportation, but
            a seamless extension of one&apos;s lifestyle, offering unparalleled
            comfort, performance, and style.
            <br />
            <br />
             From the drawing board to the
            assembly line, every vehicle we produce embodies our core values of
            innovation, quality, and integrity. Our dedicated team of engineers,
            designers, and craftsmen work tirelessly to push the boundaries of
            what is possible, constantly seeking new ways to enhance the driving
            experience. We embrace the latest advancements in electric and
            autonomous technology, striving to create vehicles that are not only
            environmentally responsible but also exhilarating to drive. As we
            look to the future, our mission remains clear: to inspire and
            empower our customers through exceptional automotive experiences. We
            are committed to continuing our legacy of excellence, building cars
            that not only meet but exceed the expectations of drivers around the
            world. Together, we are driving towards a new era of mobility, where
            every journey is a testament to our passion for innovation and our
            dedication to making a positive impact on the world. 
            <br />
            <br />
            Trevor Farias,
            <br /> Founder of Veloce
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
