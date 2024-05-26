import {loadStripe} from "@stripe/stripe-js";
import { useCart } from "@/lib/useCart"

interface CheckoutButtonProps {
    cartTotal: number;
}
export default function CheckoutButton({cartTotal}: CheckoutButtonProps ) {
    const { items } = useCart()
    const itemCount = items.length


    const redirectToCheckout = async () => {
        try {
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
    
            if (!stripe) throw new Error('Stripe failed to initialize.');
    
            const lineItems = items.map(({ product }) => ({
                price_data: {
                    currency: 'usd', // Assuming the currency is USD for this example
                    product_data: {
                        name: product.description,
                    },
                    unit_amount: product.price * 100, 
                },
            }));
    
            const checkoutResponse = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ lineItems, cartTotal }),
            });
    
            const { sessionId } = await checkoutResponse.json();
            const stripeError = await stripe.redirectToCheckout({ sessionId });
    
            if (stripeError) {
                console.error(stripeError);
            }
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <button
            onClick={() => itemCount > 0 && redirectToCheckout()}
            disabled={itemCount === 0}
            className="rounded-md border border-transparent bg-sky-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 mr-2 disabled:bg-gray-600">
            Checkout
        </button>
    );
}