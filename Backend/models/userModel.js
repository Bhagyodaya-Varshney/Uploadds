import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    uploadCount: {
        type: Number,
        default: 0, // Set a default value
        validate: {
            validator: function(value) {
                return !isNaN(value); // Ensure the value is a number
            },
            message: props => `${props.value} is not a valid number!`
        }
    }
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
