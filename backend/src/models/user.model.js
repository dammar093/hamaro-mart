import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName:{
      type:String,
      required :true
    },
    username:{
      type:String,
      required:true,
      lowercase:true,
      unique:true
    },
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    avatar:{
      type:String, // cloudinary url
      required:true
    },
    password:{
      type:String, // use bycrypt for encrypt password
      required:true
    },
    role:{
      type:String,
      default:"user"
    }
  },
  {
    timestamps:true
  }
)

export default User = mongoose.model("User",userSchema);