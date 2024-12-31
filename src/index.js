// require('dotenv').config()
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import dotenv from "dotenv";
import connectDB from "./db/index.js" ;

dotenv.config({
    path: './env'
})

connectDB()







/*
//THIS IS THE FIRST APPROACH, HERE WE HAVE USED TRY CATCH , AWAIT, ASYNC (For different continent thing).etc

import express from "express";
const app = express()

(async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error) =>{
            console.log("error :", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("error : ", error)
        throw err
    }
})()

*/