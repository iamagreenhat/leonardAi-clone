import userModel from "@/models/user"
import Dbconnect from "@/utils/DBconnect"

export const POST=async(req)=>{
    try{

        // extract incoming data
        const {email,password}=await req.json()
        
        // call database connection
        await Dbconnect()
        
        // find if the user email matches any in my db
        const user=await userModel.findOne({email:email})
        if(user){
            // compare user password
            if(user.password==password){
                return Response.json({msg:"user logged in successfully"},{status:200})

            }
            else{
                return Response.json({msg:"Invalid credentials"},{status:401})

            }
        }
        else{
                return Response.json({msg:"Invalid credentials"},{status:401})

        }
    }
    catch(err){
        console.log(err.message)
        return Response.json({error:"server Error"},{status:500})

    }


}