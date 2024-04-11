import mongoose from "mongoose"
import { DB_NAME } from "../constant.js";
import dotenv from "dotenv"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log("MONGODB connected");
    } catch (error) {
        console.log("MONGODB connection FAILED ");
        process.exit(1)
    }
}

export default connectDB