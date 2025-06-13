import blogModel from "@/models/blog"
import Dbconnect from "@/utils/DBconnect"


export const GET=async (req,{params})=>{

    try{

        // get blog id
        const id=params.id
        // call datbase connection
        await Dbconnect()
        const blogDetails=await blogModel.findById(id)
    if(!blogDetails){
        return Response.json({msg:"Blog not found"},{status:404})
    }

    return Response.json(blogDetails,{status:200})
    
    
}
catch(err){
    console.log(err.message)
    return Response.json({msg:"Blog not found"},{status:404})
}
    
}