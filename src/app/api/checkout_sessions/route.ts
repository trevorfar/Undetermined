// route.ts
import stripe from '@/config/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    const { cartTotal } = await req.json();
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Sample Product',
                    },
                    unit_amount: cartTotal * 100,
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/thank-you`,
            cancel_url: `${req.headers.get('origin')}/`,
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        return NextResponse.json({ error: 'Error creating checkout session' });
    }
}
