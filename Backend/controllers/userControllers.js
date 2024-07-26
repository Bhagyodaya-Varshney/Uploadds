import userModel from "../models/userModel.js";
import { generateToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";

export const registerController = async (req, res) => {
  try {
    const {
      fullname,
      email,
      password,
      confirmPassword,
      uploadCount = 0,
    } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists" }); // 409 Conflict is more appropriate here
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new userModel({
      fullname,
      email,
      password: hashPassword,
      uploadCount: isNaN(uploadCount) ? 0 : Number(uploadCount), // Ensure uploadCount is a valid number
    });

    // Save the new user to the database
    await newUser.save();

    // Return a success response
    return res.status(201).json({
      message: "User registered successfully",
      userId: newUser._id,
      token: generateToken(newUser._id.toString(), newUser.email),
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error occurred" });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    const correctPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !correctPassword)
      return res.status(400).json({ message: "Invalid Credentials" });
    return res.status(200).json({
      message: "User Logged In Successfully",
      userId: user._id,
      token: generateToken(user._id.toString, user.email),
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal Server Error Occur" });
  }
};
