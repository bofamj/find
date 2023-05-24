import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { first_name, last_name, text, rating, restaurant_id, user_id } =
    req.body;
  console.log("🚀 ~ file: reviews.js:25 ~ handler ~ req.body;:", req.body);
  try {
    const review = await prisma.review.create({
      data: {
        restaurant_id,
        first_name,
        last_name,
        text,
        rating,
        user_id,
      },
    });
    console.log("🚀 ~ file: reviews.js:20 ~ handler ~ review:", review);
    res.status(200).json({ review });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}
