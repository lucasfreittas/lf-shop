import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/lib/stripe";
import { useCart } from "@/context/Cart";
import { CartContext } from "@/context/Cart";


export default async function handler(req: NextApiRequest, res: NextApiResponse){

  const { allPricesIds } = req.body;

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  };

  if (!allPricesIds) {
    return res.status(400).json({ error: 'Price not found.' });
  };

  if (!Array.isArray(allPricesIds)) {
    return res.status(400).json({ error: 'Prices must be provided as an array.' });
  };

  const lineItems = allPricesIds.map(priceId => ({
    price: priceId,
    quantity: 1,
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