import exress from "express";
import dotenv from "dotenv"

dotenv.config()

const app = exress()

app.get("/",(req,res)=>{
  res.send("hello")
})


app.listen(process.env.PORT,()=>{
  console.log(`server is running on port ${process.env.PORT}`);
})