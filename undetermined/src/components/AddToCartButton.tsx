"use client"
import { Button } from "./ui/button"
import { Product } from "@/lib/utils"
import { useCart } from "@/lib/useCart"

const AddToCartButton = ({ product }: { product: Product }) => {
    const { addItem } = useCart()
    

    return <Button onClick={() => {
        addItem(product)
    }} size='lg' className="justify-end ml-auto flex hover:bg-gray-100"> 
    </Button>
}

export default AddToCartButton