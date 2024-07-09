import express from 'express';
import cors from 'cors';

import connectDb from './connectDB/db.js';
import userRouter from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials:true,
    optionSuccessStatus:200
}))

app.use("/",userRouter);

connectDb();
app.listen(4000,()=>{
    console.log("Server Running at PORT --> 4000")
})