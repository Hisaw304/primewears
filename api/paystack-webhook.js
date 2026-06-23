import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  /* VERIFY REQUEST IS FROM PAYSTACK */

  const hash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (hash !== req.headers["x-paystack-signature"]) {
    return res.status(401).json({
      error: "Invalid signature",
    });
  }

  try {
    const event = req.body;

    if (event.event === "charge.success") {
      const payment = event.data;

      console.log("Paystack Payment Success");

      console.log("Reference:", payment.reference);

      console.log("Customer:", payment.customer.email);

      console.log("Amount:", payment.amount / 100);

      /*
      SAVE ORDER TO DATABASE

      Example:

      await db.orders.create({
        reference: payment.reference,
        email: payment.customer.email,
        amount: payment.amount / 100,
        status: "paid"
      });

      SEND EMAIL

      UPDATE INVENTORY
      */
    }

    return res.status(200).json({
      received: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Webhook processing failed",
    });
  }
}
