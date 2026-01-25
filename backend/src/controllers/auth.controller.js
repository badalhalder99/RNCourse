import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {

   const { email, password } = req.body;

   try {

      const existingUser = await User.findOne({ email });

      if (existingUser) {
         return res.status(422).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await User.create({
         email,
         password: hashedPassword,
      });

      const token = jwt.sign(
         { userId: user._id, email: user.email },
         process.env.JWT_SECRET,
         { expiresIn: "1h" }
      );

      res.status(201).json({ token, userId: user._id });
   } catch (err) {
      res.status(500).json({ message: "Signup failed" });
   }
};

export const login = async (req, res) => {
   const { email, password } = req.body;

   try {

      const user = await User.findOne({ email });

      if (!user) {
         return res.status(401).json({ message: "Invalid credentials" });
      }

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
         return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
         { userId: user._id, email: user.email },
         process.env.JWT_SECRET,
         { expiresIn: "1h" }
      );

      res.json({ token, userId: user._id });
   } catch (err) {
      res.status(500).json({ message: "Login failed" });
   }
};
