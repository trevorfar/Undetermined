"use client"
import { cars } from "@/lib/cars"
import { useState } from "react"
import ProductReel from "./ProductReel"

const Browser = () => {
  const [category, setCategory] = useState("")

  const renderCar = (categoryFilter: string | undefined) => {
    const filteredCars = categoryFilter
      ? cars.filter((car) => car.category.includes(categoryFilter))
      : cars

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
        {filteredCars.map((car, index) => (
          <ProductReel
            id={car.id}
            key={index}
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
          <h1 className=" text-3xl md:text-5xl ">Pick from our fleet</h1>
        </div>
        <div className="mx-auto justify-center items-center flex flex-row py-8 gap-4">
          <div className="w-full md:w-fit border-b-4 border-gray-200 gap-4 flex flex-col md:flex-row">
            <button
              className="text-2xl hover:text-gray-500 "
              onClick={() => setCategory("")}
            >
              All
            </button>
            <button
              className="text-2xl hover:text-gray-500"
              onClick={() => setCategory("suv")}
            >
              SUVs
            </button>
            <button
              className="text-2xl hover:text-gray-500"
              onClick={() => setCategory("sedan")}
            >
              Sedans
            </button>
            <button
              className="text-2xl hover:text-gray-500"
              onClick={() => setCategory("ev")}
            >
              EV & Hybrid
            </button>
            <button
              className="text-2xl hover:text-gray-500"
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
