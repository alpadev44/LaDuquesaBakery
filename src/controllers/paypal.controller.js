require("dotenv").config();
const axios = require("axios");

const { HOST_URL, PAY_API, PAY_API_CLIENT_ID, PAY_API_SECRET } = process.env;

const createOrder = async (req, res) => {
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "100.00",
        },
      },
    ],
    payment_source: {
      paypal: {
        experience_context: {
          brand_name: "Mi Tienda",
          user_action: "PAY_NOW",
          return_url: `${HOST_URL}/capture-order`,
          cancel_url: `${HOST_URL}/cancel-order`,
        },
      },
    },
    application_context: {},
  };

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  try {
    const {
      data: { access_token },
    } = await axios.post(`${PAY_API}/v1/oauth2/token`, params, {
      auth: {
        username: PAY_API_CLIENT_ID,
        password: PAY_API_SECRET,
      },
    });

    const response = await axios.post(`${PAY_API}/v2/checkout/orders`, order, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    res.redirect(response.data.links[1].href); // para ver en postman por .json para ver en postman - el link a usar es el que tiene la propiedad de payer-action
  } catch (error) {
    console.log(error);
  }
};

const captureOrder = async (req, res) => {
  try {
    const { token } = req.query;

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const {
      data: { access_token },
    } = await axios.post(`${PAY_API}/v1/oauth2/token`, params, {
      auth: {
        username: PAY_API_CLIENT_ID,
        password: PAY_API_SECRET,
      },
    });

    const resp = await axios.post(
      `${PAY_API}/v2/checkout/orders/${token}/capture`,
      null,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    res.status(200).json(resp.data)
  } catch (error) {
    console.log(error);
  }
};

const cancelPayment = (req, res) => res.send("cancel-payment created");

module.exports = {
  createOrder,
  captureOrder,
  cancelPayment,
};
