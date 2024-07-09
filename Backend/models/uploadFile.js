import mongoose from "mongoose";

const { Schema } = mongoose;

const FileUploadSchema = new Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel", // Assuming UserModel is your User schema
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
    default: 0,
  },
}, {
  timestamps: true,
});

const FileUploadModel = mongoose.model("FileUploadModel", FileUploadSchema);

export default FileUploadModel;
