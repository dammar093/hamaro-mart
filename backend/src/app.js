import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.route.js"
const app = express()
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//user router
//http://localhost:8000/api/v1/user/register
app.use("/api/v1/user",userRouter)
//http://localhost:8000/api/v1/user/login
//http://localhost:8000/api/v1/user/updateAccount
//http://localhost:8000/api/v1/user/updateAvatar
//http://localhost:8000/api/v1/user/forgotPassword
//http://localhost:8000/api/v1/user/changePassword
//http://localhost:8000/api/v1/user/userOrifile
//http://localhost:8000/api/v1/user/refreshAccessToken








export {app}
