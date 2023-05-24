import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { setCookie } from "cookies-next";
import * as jose from "jose";

const prisma = new PrismaClient();

export default async function handelr(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const error = [];
    const validatorSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: "email is not a valid email",
      },
      {
        valid: validator.isLength(password, {
          min: 1,
        }),
        errorMessage: "password is not a valid password",
      },
    ];
    validatorSchema.forEach((check) => {
      if (!check.valid) {
        error.push(check.errorMessage);
      }
    });
    if (error.length) {
      res.status(400).json({ errorMessage: error[0] });
    }
    const fetchUserByEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!fetchUserByEmail) {
      return res
        .status(401)
        .json({ errorMessage: "Email or Password is not valid" });
    }
    const isMatch = await bcrypt.compare(password, fetchUserByEmail.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ errorMessage: "Email or Password is not valid" });
    }
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const token = await new jose.SignJWT({
      email: fetchUserByEmail.email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .sign(secret);
    setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });
    return res
      .status(200)
      .json({
        first_name: fetchUserByEmail.first_name,
        city: fetchUserByEmail.city,
        email: fetchUserByEmail.email,
        last_name: fetchUserByEmail.last_name,
        phone: fetchUserByEmail.phone,
        id: fetchUserByEmail.id,
      });
  }
  return res.status(500).json("unknowne endpoint");
}
