import mongoose from "mongoose";

const FileUpload = new mongoose.Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  downloadCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const FileUploadModel = mongoose.model("FileUploadModel", FileUpload);

export default FileUploadModel;
