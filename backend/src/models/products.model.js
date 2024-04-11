import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
  {
    title:{
      type:String,
      required:true
    },
    images:{
      type:[String], // images comes from cludinary 
       required:true
    },
    description:{
      type:String,
      required:true
    },
    price:{
      type:Number,
      rquired:true
    },
    discountPercentage:{
      type:Number
    },
    stock:{
      type:Number,
      required:true
    },
    category:{
      type:mongoose.Schema.ObjectId,
      ref:"Category",
      required:true
    },
    brand:{
      type:String
    },
    uploadBy:{
      type:mongoose.Schema.ObjectId,
      ref:"User"
    },
   
  },
  {
    timestamps:true
  },

)

export default Product = mongoose.model("Product",productSchema)