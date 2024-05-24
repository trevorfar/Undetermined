import { CartItem, Product, formatPrice } from "@/lib/utils"
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
import { useState } from "react"

const Cart = () => {

const [cartItems, setCartItems] = useState<CartItem[]>([]);

const addItemToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const fee = 12;
 
  return (
    <>
   
    <Sheet>
      <SheetTrigger>Cart</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart {itemCount}</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between">
                  <div>{product.description}</div>
                  <div>{quantity}</div>
                  <div>{formatPrice(product.price * quantity)}</div>
                  </div>
              ))}

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
                  <Link
                    href="/cart"
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-60 w-60 text-muted-foreground"
            ></div>
            <div className="text-xl font-semibold"> Your cart is empty</div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
    </>
  )
}
export default Cart
