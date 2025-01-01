import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async() =>{
    try {
        const connection_instance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n "mongodb connected:" ${connection_instance.connection.host}`);
    } catch (error) {
        console.log("mongoDB connection error", error);
        process.exit(1) // iski jagah error throw bhi krr skte the 
    }
}

export default connectDB