import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/lib/stripe";
import { useCart } from "@/context/Cart";


export default async function handler(req: NextApiRequest, res: NextApiResponse){

  const { cart } = useCart();
  const allPricesIds = cart.map(item => item.defaultPriceId);

  const successUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const lineItems = allPricesIds.map(priceId => ({
    price: priceId,
    quantity: 1
  }));

  const checkoutSession = await stripe.checkout.sessions.create({
    
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItems
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })

};