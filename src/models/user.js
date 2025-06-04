import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }


},
{timestamps:true}
)

const userModel=mongoose.models.user || mongoose.model("user", userSchema)
export default userModel