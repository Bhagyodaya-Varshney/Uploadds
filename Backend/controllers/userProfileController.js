import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';


export const userProfileController = async(req,res) =>{
    const {token} = req.body;

    const decodedData = jwt.verify(token, "6398693679");
    const User = await UserModel.find({email:decodedData.email});    
    return res.status(200).json({user:User})
}