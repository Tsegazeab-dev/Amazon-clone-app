import { onRequest } from "firebase-functions/v2/https";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const secrete_key = process.env.STRIPE_SECRET;
console.log(secrete_key);
const stripe = new Stripe(`${secrete_key}`);
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "working",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(400).json({ error: "The amount must be greater than zero." });
  }
});

export const api = onRequest(app);


