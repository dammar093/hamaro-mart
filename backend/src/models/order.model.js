import mongoose from "mongoose";



const orderItemSchema= new mongoose.Schema(
  {
    productIt:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Product"
    },
    quantity:{
      type:Number,
      required:true
    }
  }
)

const orderSchema = new mongoose.Schema(
  {
    orderPrice:{
      type:Number,
      reqluired:true
    },
    customer:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    },
    orderItems:{
      type:[orderItemSchema]
    },
    address:{
      type:String,
      required:true
    },
    status:{
      type:String,
      enum:["PENDING","CANCELLED","DELIVERE"],
      default:"PENDING"
    },
    paymentMethod:{
      type:String,
      reqluired:true
    }
  },
  {timestamps:true}
)

export const Order= mongoose.model("Order",orderSchema)