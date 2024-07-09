import mongoose from "mongoose";

const { Schema } = mongoose;

const FileSchema = new Schema({
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
  password: String, // Optional field to store file password if required
  downloadCount: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true // Add timestamps automatically: createdAt and updatedAt
});

const FileModel = mongoose.model("FileModel", FileSchema);

export default FileModel;
