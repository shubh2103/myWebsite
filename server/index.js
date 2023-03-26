import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;



app.use(bodyParser.json({
    limit:"30mb",
    extended:true
}));    

app.use(bodyParser.urlencoded({
    limit:"30mb",
    extended:true
}));    

app.use(cors());


app.use('/posts', postRoutes);
app.use("/user", userRouter);

mongoose.connect(process.env.CONNECTION_URL ,  { useNewUrlParser: true })
.then(
    ()=>app.listen(PORT, ()=> console.log(`server running on port : ${PORT}`))
)
.catch(
    (error)=>console.log(error.message)
);