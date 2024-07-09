import FileModel from "../models/fileModel.js";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
import FileUploadModel from "../models/uploadFile.js";
import bcrypt from "bcrypt";

export const FileController = async (req, res) => {
  const { password, token } = req.body;


  if (!req.file) {
    console.log("No file uploaded");
    return res.status(400).send({ message: "No file uploaded" });
  }

  if (!password) {
    console.log("Password is required");
    return res.status(400).send({ message: "Password is required" });
  }

  try {
    const decodedData = jwt.verify(token, "6398693679");
    const User = await UserModel.findOne({ email: decodedData.email });
    const id = User._id;
    const uploadCount = User.uploadCount+1;

    const hashedPassword = await bcrypt.hash(password, 10);

    const fileData = {
      UserId: id,
      originalName: req.file.originalname,
      path: req.file.path,
      password: hashedPassword,
      downloadCount: 0,
    };

    
    const file = new FileModel(fileData);
    await UserModel.updateOne({email:decodedData.email},{uploadCount:uploadCount});
    await file.save();

    return res.status(200).json({
      message: "File uploaded successfully",
      fileLink: `${req.headers.origin}/file/${file.id}`,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};




export const FileUploadController = async (req, res) => {
  const { token } = req.body;


  if (!req.file) {
    console.log("No file uploaded");
    return res.status(400).send({ message: "No file uploaded" });
  }

  try {
    const decodedData = jwt.verify(token, "6398693679");
    const User = await UserModel.findOne({ email: decodedData.email });
    const id = User._id;
    const uploadCount = User.uploadCount+1;

    const fileData = {
      UserId: id,
      originalName: req.file.originalname,
      path: req.file.path,
      downloadCount: 0,
    };

    
    const file = new FileUploadModel(fileData);
    await UserModel.updateOne({email:decodedData.email},{uploadCount:uploadCount});
    await file.save();

    return res.status(200).json({
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
