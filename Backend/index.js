import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import Bookroute from "./route/Bookroute.js";
import Userroute from "./route/Userroute.js";


const app = express()
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 3000;
const URI=process.env.MONGODBURI;

try{
    mongoose.connect(URI);
    console.log("Mongodb is Connected")
}
catch(error){
    console.log("Error",error);
}

app.get('/', (req, res) => {
  res.send('bhola!')
})

app.use("/book",Bookroute);
app.use("/user",Userroute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})