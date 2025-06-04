const baseUrl="/api"


const registerUser=async ()=>{
    const res= await fetch(`${baseUrl}/signup`)
    const data=await res.json()
    return data
}