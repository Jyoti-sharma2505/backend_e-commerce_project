const mongoose=require("mongoose");
require("dotenv").config()

const Mongo_Url=process.env.MONGO_URL;

const initilizationData=async()=>{
    await mongoose.connect(Mongo_Url)
    .then(()=>console.log("Successfully connected"))
    .catch((error)=>console.log("Not connected successfully",error))
}

module.exports={initilizationData}