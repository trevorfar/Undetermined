import { formatPrice } from "@/lib/utils"
import { Separator } from "./ui/separator"
import { Sheet, SheetFooter } from "./ui/sheet"
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { buttonVariants } from "./ui/button"
import Link from "next/link"
  

const Cart = () => {
  const itemCount = 0
  const fee = 12
  const cartTotal = 3
    return(
        <Sheet>
        <SheetTrigger>Cart</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart (0)</SheetTitle>
            
          </SheetHeader>
          {itemCount > 0 ? (
                <>
                    <div className="flex w-full flex-col pr-6">
                            {/* {items.map(({ product }) => (
                                <CartItem product={product} key={product.id} />
                            ))} */}
                    </div>
                    <div className="space-y-4 pr-6">
                        <Separator />
                        <div className="space-1 5 text-sm">
                            <div className="flex">
                                <span className="flex-1">Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1">Transaction Fee</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1">Total</span>
                                <span>{formatPrice(cartTotal + fee)}</span>
                            </div>
                        </div>

                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href="/cart" className={buttonVariants({
                                    className: "w-full",
                                })}>
                                    Continue to Checkout
                                </Link>
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
                <SheetTrigger asChild>
                    <Link href='/products' className={buttonVariants({
                        variant: "link",
                        size: "sm",
                        className: "text-sm text-muted-foreground",
                    })}>
                        Add items to your cart to checkout
                    </Link>

                </SheetTrigger>
            </div>
            )}
        </SheetContent>
      </Sheet>
      
    )
}
export default Cart