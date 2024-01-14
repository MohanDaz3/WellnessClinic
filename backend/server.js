import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import userRoutes from './Routes/userRoutes.js'
dotenv.config()

const port =process.env.PORT||5000 ;

const app=express();

connectDB()
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())



app.use('/api/users',userRoutes)
app.get('/',(req,res)=>res.send('server is ready'))

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`server started on port ${port}`))
