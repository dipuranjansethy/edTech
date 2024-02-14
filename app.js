import express  from "express";
import dotenv, { config } from 'dotenv'
import course from './routes/courseRoutes.js'
import user from './routes/userRoutes.js'
import payment from './routes/paymentRoutes.js'
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from 'cookie-parser';
import otehr from './routes/otherRoutes.js';



config({
    path:"./config/.env"
})

const app=express()
app.use(cookieParser())

//using middlewares
app.use(express.json())
app.use(
    express.urlencoded({
        extended:true,
    })

)

app.use("/api/v1",course)
app.use("/api/v1",user)
app.use("/api/v1",payment)
app.use("/api/v1",otehr)

export default app;
app.use(ErrorMiddleware)