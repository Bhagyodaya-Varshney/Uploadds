import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export const ForgetPasswordController = async (req, res) => {
  try {
    const { email } = req.body;

    // Generate a new random password
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    // Hash the new password
    const encryptedPass = await bcrypt.hash(result, 10);
    console.log(`Encrypted password: ${encryptedPass}`);

    const updateResult = await UserModel.updateOne(
      { email: email },
      { password: encryptedPass }
    );
    console.log(`Update result: ${JSON.stringify(updateResult)}`);

    // Set up nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bhagyodayavarshney14@gmail.com",
        pass: "Bhagy@1234",
      },
    });

    const mailOptions = {
      from: "bhagyodayavarshney14@gmail.com",
      to: email,
      subject: "Password Reset",
      text: `Your changed password for Uploadds is ${result}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res
          .status(500)
          .send({ error: "Failed to send email. Please try again later." });
      }
      res.status(200).json({ message: "New Password shared to your email" });
    });
  } catch (e) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
