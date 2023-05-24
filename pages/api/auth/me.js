import { PrismaClient } from "@prisma/client";

import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function handelr(req, res) {
  const bearerToken = req.headers["authorization"];
  console.log("🚀 ~ file: me.js:9 ~ handelr ~ bearerToken:", bearerToken);
  const token = bearerToken.split(" ")[1];

  const payload = jwt.decode(token);

  if (!payload.email) {
    return res.status(401).json({ errorMessage: "unauthorized" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      city: true,
      email: true,
      phone: true,
    },
  });
  return res
    .status(200)
    .json({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      city: user.city,
      email: user.email,
      phone: user.phone,
    });
}
