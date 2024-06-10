import { app } from "./app.js";
import dotenv  from "dotenv"
import connectDB from "./db/db.js";
dotenv.config({
  path:"./.env"
})

connectDB().then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is runnig on port ${process.env.PORT}`);
  })
})
.catch(()=>{
  console.log("error on db connection");
})
