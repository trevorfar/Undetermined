"use client"
import { useState } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import Link from "next/link"
import ProductReel from "./ProductReel"

const cars = [
{
image: "https://www.mazda.ca/globalassets/mazda-canada/build-and-price/jellies/2025-CX-70-PHEV-Nav.png",
category: "fourDoor",
seats: 8,
description: "Mazda CX-70",
price: 58750,
},
{
image: "https://www.mazda.ca/globalassets/mazda-canada/build-and-price/jellies/2025-CX-70-PHEV-Nav.png",
category: "fourDoor",
seats: 8,
description: "Mazda CX-70",
price: 58750,
},
{
image: "https://www.mazda.ca/globalassets/mazda-canada/build-and-price/jellies/2025-CX-70-PHEV-Nav.png",
category: "fourDoor",
seats: 8,
description: "Mazda CX-70",
price: 58750,
},

]


const Browser = () => {
  const [category, setCategory] = useState("All")

  const renderSquare = () => {
    switch (category) {
      case "Newest":
        return <div className="w-32 h-32 bg-red-500"></div>
      case "Best Selling":
        return <div className="w-32 h-32 bg-yellow-500"></div>
      case "Four Door":
        return <div className="w-32 h-32 bg-blue-500"></div>
      case "Sport":
        return <div className="w-32 h-32 bg-green-500"></div>
      default:
        return <div className="w-32 h-32 bg-black"></div>
    }
  }

  return (
    <section className="h-screen">
      <div className="bg-gray-500 w-full">
        <div className="justify-center items-center mx-auto flex pt-6">
          <h1 className="text-5xl">Pick from our fleet</h1>
        </div>
        <div className="mx-auto justify-center items-center flex flex-row pt-8 gap-4">
          <div className="border-b-4 border-gray-200 gap-4 flex flex-row">
            <button className="text-2xl" onClick={() => setCategory("All")}>
              All
            </button>
            <button className="text-2xl" onClick={() => setCategory("Newest")}>
              Newest
            </button>
            <button
              className="text-2xl"
              onClick={() => setCategory("Best Selling")}
            >
              Best Selling
            </button>
            <button
              className="text-2xl"
              onClick={() => setCategory("Four Door")}
            >
              Four Door
            </button>
            <button className="text-2xl" onClick={() => setCategory("Sport")}>
              Sport
            </button>
            <Drawer>
              <DrawerTrigger className="text-2xl">
                Filter By Budget
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerDescription>
                    <div className="flex flex-row gap-4 items-center mx-auto justify-center">
                      <Button>
                        <p className="text-2xl">&larr;</p>
                      </Button>
                      <Button>
                        <p className="text-2xl">&rarr;</p>
                      </Button>
                    </div>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button
                    variant="outline"
                    className="w-20 justify-center items-center mx-auto"
                  >
                    Submit
                  </Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          {renderSquare()}
        </div>
      </div>
      {}
      <ProductReel
        image="https://www.mazda.ca/globalassets/mazda-canada/build-and-price/jellies/2025-CX-70-PHEV-Nav.png"
        category="fourDoor"
        seats={8}
        description="Mazda CX-70"
        price={58750}
      />
    </section>
  )
}

export default Browser
