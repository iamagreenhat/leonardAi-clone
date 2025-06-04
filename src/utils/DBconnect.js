import mongoose from "mongoose";

export default async function Dbconnect() {
        try{
            const dbConnection=await mongoose.connect(process.env.MONGODB_URL)
            console.log("database connected")
            return dbConnection
        }
        catch(error){
            console.log("this is the database connection error:", error.message)
        }

}