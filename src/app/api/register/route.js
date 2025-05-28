export const POST=async (req)=>{
    // take the payload from the client request,
    // now- we convert the jsoned payload to object fpr we to be le to use it on the api route
    const {title,price,description,image}=await req.json()
    console.log(title,description,image,price)
 return  Response.json({msg:"api is working"})
}   