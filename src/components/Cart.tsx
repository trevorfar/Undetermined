"use client"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { ShoppingCart } from 'lucide-react'
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import Link from "next/link"
import { useCart } from "../lib/useCart"
import { ScrollArea } from "./ui/scroll-area"
import CartItem from "./CartItem"
import { useEffect, useState } from "react"
import CheckoutButton from "./CheckoutButton"

//FIX BUG WHERE IF CLICK SAME ONE TWICE IT DOESNT UPDATE 
//FIX CLOSE NAVBAR ON OPEN

const Cart = () => {
    const { items } = useCart()
    const itemCount = items.length
    const fee = 1
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

   
    const cartTotal = items.reduce((total, { product }) => total + product.price, 0)


    return <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2 z-50">
            <ShoppingCart aria-hidden="true"
                className="h-6 w-6 flex-shrink-0 
        text-gray-400 group-hover:text-gray-500"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {isMounted ? itemCount : "..."}
            </span>
        </SheetTrigger>
        <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
            <SheetHeader className="space-y-2.5 pr-6">
                <SheetTitle> Cart ({itemCount})</SheetTitle>
            </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">
                            <ScrollArea className="max-h-64 overflow-auto">
                                {items.map(({ product }) => (
                                    <CartItem product={product} key={product.id} />
                                ))}
                            </ScrollArea>
                        </div>
                        <div className="space-y-4 pr-6">
                            <Separator />
                            <div className="space-1 5 text-sm">
                                <div className="flex">
                                    <span className="flex-1">Shipping</span>
                                    <span className="text-muted-foreground">Free</span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1">Transaction Fee</span>
                                    <span className="text-muted-foreground">{formatPrice(fee)}</span>
                                </div>
                                <div className="flex ">
                                    <span className="flex-1  text-xl">Total</span>
                                    <span className="text-black text-lg border-b-2 border-black">{formatPrice(cartTotal + fee)}</span>
                                </div>
                            </div>

                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <CheckoutButton cartTotal={cartTotal}/>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (<div className="flex h-full flex-col items-center justify-center space-y-1">
                    <div
                        aria-hidden='true'
                        className="relative mb-4 h-60 w-60 text-muted-foreground">
                        
                    </div>
                    <div className="text-xl font-semibold"> Your cart is empty</div>
    
                </div>
                )}
        </SheetContent>
    </Sheet>
}
export default Cart