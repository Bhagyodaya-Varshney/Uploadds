import FileModel from "../models/fileModel.js";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
import FileUploadModel from "../models/uploadFile.js";
import bcrypt from "bcrypt";

const DAILY_LIMIT = 15;

export const FileController = async (req, res) => {
  const { password, token } = req.body;


  if (!req.file)  return res.status(400).send({ message: "No file uploaded" });

  if (!password) return res.status(400).send({ message: "Password is required" });

  try {
    const decodedData = jwt.verify(token, "6398693679");
    const User = await UserModel.findOne({ email: decodedData.email });

    const currentDate = new Date();
    const lastuploadDate = User.lastUpload;
    const isSameDay = currentDate.toDateString() === lastuploadDate.toDateString();

    if(!isSameDay){
      User.uploadCount = 0;
      User.lastUpload = currentDate;
    }

    if(User.uploadCount >= DAILY_LIMIT) return res.status(500).json({message:"Daily Upload Limit Reached"});


    User.uploadCount = User.uploadCount+1;
    await User.save();

    const hashedPassword = await bcrypt.hash(password, 10);

    const fileData = {
      UserId: User._id,
      originalName: req.file.originalname,
      path: req.file.path,
      password: hashedPassword,
      downloadCount: 0,
    };

    
    const file = new FileModel(fileData);
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


  if (!req.file)  return res.status(400).send({ message: "No file uploaded" });
  

  try {
    const decodedData = jwt.verify(token, "6398693679");
    const User = await UserModel.findOne({ email: decodedData.email });

    const currentDate = new Date();
    const lastuploadDate = User.lastUpload;
    const isSameDay = currentDate.toDateString() === lastuploadDate.toDateString();

    if(!isSameDay){
      User.uploadCount = 0;
      User.lastUpload = currentDate;
    }

    if(User.uploadCount >= DAILY_LIMIT) return res.status(500).json({message:"Daily Upload Limit Reached"});
    console.log(User.uploadCount+1);
    User.uploadCount = User.uploadCount+1;
    await User.save();

    const fileData = {
      UserId: User._id,
      originalName: req.file.originalname,
      path: req.file.path,
      downloadCount: 0,
    };

    
    const file = new FileUploadModel(fileData);
    await file.save();

    return res.status(200).json({
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
