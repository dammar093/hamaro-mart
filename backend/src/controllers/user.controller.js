import { asyncHandler } from "../utils/asyncHandler.js";

const userRegister = asyncHandler(async(req,res)=>{
    res.send("hello")
})



export {userRegister}