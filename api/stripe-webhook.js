import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    const sig = req.headers["stripe-signature"];

    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      console.log("Stripe Payment Success");

      console.log("Email:", session.customer_email);

      console.log("Amount:", session.amount_total / 100);

      console.log("Customer Name:", session.metadata.customerName);

      console.log("Phone:", session.metadata.phone);

      console.log("Country:", session.metadata.country);

      console.log("State:", session.metadata.state);

      console.log("City:", session.metadata.city);

      console.log("Address:", session.metadata.address);

      console.log("Subtotal:", session.metadata.subtotal);

      console.log("Shipping:", session.metadata.shipping);

      console.log("Tax:", session.metadata.tax);

      console.log("Total:", session.metadata.total);

      /*
      SAVE ORDER TO DATABASE

      const order = {
        paymentProvider: "stripe",

        paymentIntent:
          session.payment_intent,

        customerEmail:
          session.customer_email,

        customerName:
          session.metadata
            .customerName,

        phone:
          session.metadata.phone,

        country:
          session.metadata.country,

        state:
          session.metadata.state,

        city:
          session.metadata.city,

        address:
          session.metadata.address,

        subtotal:
          Number(
            session.metadata
              .subtotal
          ),

        shipping:
          Number(
            session.metadata
              .shipping
          ),

        tax:
          Number(
            session.metadata.tax
          ),

        total:
          Number(
            session.metadata
              .total
          ),

        status: "paid",

        createdAt:
          new Date(),
      };

      await saveOrder(order);

      UPDATE INVENTORY

      SEND CONFIRMATION EMAIL
      */
    }

    return res.status(200).json({
      received: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).send(`Webhook Error: ${error.message}`);
  }
}
