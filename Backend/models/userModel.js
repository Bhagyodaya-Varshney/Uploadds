import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure emails are unique
    },
    password: {
        type: String,
        required: true
    },
    uploadCount: {
        type: Number,
        default: 0,
    },
    lastUpload: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
