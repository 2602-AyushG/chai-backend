import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//use is for middlewares
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import 

import userRouter from './routes/user.routes.js'

//routes decleration
//app.get tab use krte the jab same jagah hee controller aur routes likhte the but ab we have seperated it so we will use app.use
app.use("api/v1/users", userRouter)

export { app }