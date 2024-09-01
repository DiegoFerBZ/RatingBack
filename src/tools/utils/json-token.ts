import jwt from "jsonwebtoken";
import { User } from "../../models/user";

const secretKey = process.env.JWT_SECRET_KEY || "ratingApp";

export function generateToken(user: User): string {
  const payload = {
    id: user.id_usuario,
    email: user.email,
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

  return token;
}
