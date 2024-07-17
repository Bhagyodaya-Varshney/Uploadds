import FileModel from "../models/fileModel.js";
import FileUploadModel from "../models/uploadFile.js";
import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const handleRecentFileController = async (req, res) => {
  const { token } = req.body;
  try {
    const decodedData = jwt.verify(token, "6398693679");
    const User = await UserModel.findOne({ email: decodedData.email });

    const a = await FileModel.find({ UserId: User._id });
    const b = await FileUploadModel.find({ UserId: User._id });

    const c = [ ...a, ...b ];
    c.sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt));
    return res.status(200).json({"data":c});
  } catch (e) {
    console.log(e);
  }
};
