import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

export const userChangePassword = async (req, res) => {
    const { oldPass, newPass, token } = req.body;

    try {
        const decodedData = jwt.verify(token, "6398693679");
        const User = await userModel.findOne({ email: decodedData.email });

        if (!User) return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(oldPass, User.password);
        if (!isMatch) return res.status(400).json({ message: "Old password is incorrect" });

        const newHashPassword = await bcrypt.hash(newPass, 10);
        await userModel.updateOne({ email: User.email }, { password: newHashPassword });

        return res.status(200).json({ message: "Password updated successfully" });
    } catch (e) {
        return res.status(500).json({ message: "Internal Server Error", error: e.message });
    }
}
