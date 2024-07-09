import mongoose from "mongoose";

const connectDb = () => {
    mongoose.connect("mongodb://localhost:27017/uploadds").then(()=>{console.log("Database Connected")})
}

export default connectDb;