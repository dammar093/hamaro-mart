import mongoose from "mongoose"


const reviewSchema = new mongoose.Schema(
  {
    rating:{
      type:Number,
      required:true
    },
    content:{
      type:String,
      required:true
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    product:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Product"
    }
  },
  {
    timestamps:true
  }
)

export default Review = mongoose.model("Review",reviewSchema)