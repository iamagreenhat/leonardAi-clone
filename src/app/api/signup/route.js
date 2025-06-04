import userModel from "@/models/user";
import Dbconnect from "@/utils/DBconnect"

export const POST=async(req)=>{
    // get the formdata sent by the client
    // destructure the form data(extract teh form data) and convert to object 
   const {username,email,password}=await req.json()
   try{

       // establish connection with the databse
       await Dbconnect();
       //    store user info in the database
       const newUser= new userModel({
        username,password,email
       })

       await newUser.save()

       if(newUser){
       return  Response.json({msg:"USer registered succeffully"})
    }
    else{
           return Response.json({msg:"USer not registered succeffully"})

       }
       
    }

    catch(err){
        console.log(err.message)
    }
    

   return Response.json({username,email,password})

}