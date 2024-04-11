import mongoose from "mongoose"


const categorySchema = new mongoose.Schema(
  {
    title:{
      type:String,
      required:true
    },
    image:{
      type:String, // url comes from cloudinary
      required:true
    }
  },
  {
    timestamps:true
  }
)

export default Category = mongoose.model("Category",categorySchema)