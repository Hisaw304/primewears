import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    const { customer, items, subtotal, shipping, tax, total, paymentMethod } =
      req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",

          product_data: {
            name: item.name,
          },

          unit_amount: Math.round(item.price * 100),
        },

        quantity: item.quantity,
      })),

      customer_email: customer.email,

      mode: "payment",

      metadata: {
        customerName: `${customer.firstName} ${customer.lastName}`,

        phone: customer.phone,

        country: customer.country,

        state: customer.state,

        city: customer.city,

        address: customer.address,

        subtotal: subtotal.toString(),

        shipping: shipping.toString(),

        tax: tax.toString(),

        total: total.toString(),

        paymentMethod,
      },

      success_url: `${req.headers.origin}/payment-success`,

      cancel_url: `${req.headers.origin}/payment-failed`,
    });

    return res.status(200).json({
      url: session.url,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Stripe checkout failed",
    });
  }
}
