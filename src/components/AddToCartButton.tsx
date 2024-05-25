"use client"
import { Button } from "./ui/button"
import { Product } from "@/lib/utils"
import { useCart } from "@/lib/useCart"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AddToCartButton = ({ product }: { product: Product }) => {
    const { addItem } = useCart()
    

    return <button onClick={() => {
        addItem(product)
    }} className="justify-end ml-auto my-auto pl-4 flex hover:opacity-40"> 
    <ShoppingCartIcon />
    </button>
}

export default AddToCartButton