import nodemailer from "nodemailer";

export const otpController = async (req, res) => {
  try {
    const { email } = req.body;
    const numbers = "0123456789";
    let result = "";
    for (let i = 0; i < 4; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "mtrbhagyodayame@gmail.com",
        pass: "tuak gkpd xtjf ftlm",
      },
    });

    const mailOptions = {
      from: "mtrbhagyodayame@gmail.com",
      to: email,
      subject: "OTP Verification",
      text: `Your OTP Verification for Uploadds is ${result}`,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "OTP sent to your email successfully.", otp: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
