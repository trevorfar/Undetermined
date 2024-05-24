"use client"
import { Button } from "./ui/button"
import { Product } from "@/lib/utils"
import { useCart } from "@/lib/useCart"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AddToCartButton = ({ product }: { product: Product }) => {
    const { addItem } = useCart()
    

    return <Button onClick={() => {
        addItem(product)
    }} size='sm' className="justify-end ml-auto flex hover:bg-gray-50"> 
    <ShoppingCartIcon />
    </Button>
}

export default AddToCartButton