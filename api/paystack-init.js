export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const { customer, items, subtotal, shipping, tax, total, paymentMethod } =
    req.body;

  try {
    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: customer.email,

          amount: Math.round(total * 100),

          currency: "USD",

          callback_url: `${req.headers.origin}/payment-success`,

          metadata: {
            customer,

            items,

            subtotal,

            shipping,

            tax,

            total,

            paymentMethod,
          },
        }),
      }
    );

    const data = await response.json();

    if (!data.status) {
      return res.status(400).json({
        error: data.message,
      });
    }

    return res.status(200).json(data.data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Payment initialization failed",
    });
  }
}
