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
import { cars } from "@/lib/cars"

const Browser = () => {
  const [category, setCategory] = useState("")

  const renderCar = (categoryFilter: string | undefined) => {
    const filteredCars = categoryFilter
      ? cars.filter((car) => car.category === categoryFilter)
      : cars

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
        {filteredCars.map((car) => (
          <ProductReel
            id={car.id}
            key={car.id}
            image={car.image}
            category={car.category}
            seats={car.seats}
            description={car.description}
            price={car.price}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="h-screen">
      <div className="w-full">
        <div className="justify-center items-center mx-auto flex pt-12 ">
          <h1 className="text-5xl ">Pick from our fleet</h1>
        </div>
        <div className="mx-auto justify-center items-center flex flex-row py-8 gap-4">
          <div className="border-b-4 border-gray-200 gap-4 flex flex-row">
            <button className="text-2xl" onClick={() => setCategory("")}>
              All
            </button>
            <button className="text-2xl" onClick={() => setCategory("suv")}>
              SUVs
            </button>
            <button className="text-2xl" onClick={() => setCategory("sedan")}>
              Sedans
            </button>
            <button className="text-2xl" onClick={() => setCategory("ev")}>
              EV & Hybrid
            </button>
            <button
              className="text-2xl"
              onClick={() => setCategory("convertible")}
            >
              Convertible
            </button>
          
          </div>
        </div>
      </div>
      {renderCar(category)}
    </section>
  )
}

export default Browser
