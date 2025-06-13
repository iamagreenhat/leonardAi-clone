import mongoose from "mongoose"

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    body:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    category:{
        type:String,
        enum:['lifestyle','entertainment', 'politics','sports', 'education']
    }
},{timestamps:true})

const blogModel=mongoose.models.blog || mongoose.model('blog',blogSchema)
export default blogModel