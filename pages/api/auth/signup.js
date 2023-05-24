import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";
const prisma = new PrismaClient();

export default async function signUp(req, res) {
  const { firstName, lastName, email, phone, city, password } = req.body;
  let error = [];
  if (req.method === "POST") {
    /* const validatorSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "the first name must be at least 20 characters",
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "the last name must be at least 20 characters",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "the email is invalid",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "the phone number is invalid",
      },
      {
        valid: validator.isLength(city, {
          min: 3,
        }),
        errorMessage: "the city  is invalid",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "the password is invalid",
      },
    ]; */
    const fetchUserByEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (fetchUserByEmail) {
      res
        .status(400)
        .json({ errorMessage: "Email is associated with another account" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const token = await new jose.SignJWT({
      email: email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .sign(secret);
    setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });
    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        city,
        email,
        password: hashPassword,
        phone,
      },
    });

    return res.status(200).json({ user: user, token: token });
  }
}
/* */
