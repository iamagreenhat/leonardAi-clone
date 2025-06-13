import blogModel from "@/models/blog"
import Dbconnect from "@/utils/DBconnect"

export const POST = async (req) => {

    try {

        // take incoming data
        const { title, body, description, category } = await req.json()

        if (!title || !body || !description || !category) {
            return Response.json({ msg: "title,body,description and category are all required" }, { status: 400 })
        }
        // establish database connection
        await Dbconnect()

        // store blog details in the databse
        const blog = new blogModel({
            title,
            category,
            description,
            body
        })

        await blog.save()
        if (!blog) {
            return Response.json({ msg: "Problem creating blog post" }, { status: 400 })
        }
        return Response.json({ msg: "Blog post created successfully" }, { status: 200 })

    }

    catch(err){
        console.log(err.message)
        return Response.json({msg:"Server Error"} ,{status:500})

    }
}

export const GET=async(res)=>{

    try{

        const blog=await blogModel.find();
        if(!blog){
            return Response.json({msg:"no blog found"}, {staus:404})
        }
        return Response.json(blog, {staus:200})
        
    }
    catch(err){
        console.log(err.message)
        return Response.json({msg:"Server Error"} ,{status:500})
    }
}