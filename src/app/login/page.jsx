"use client"

import { useRouter } from 'next/navigation'
import React, { useReducer, useState } from 'react'

export default function LoginPage() {

    const router=useRouter()
    const [formData, setFormData] = useState({
        email:"",
        password: "",
        
    })
    // Step 2: Error state
    const [errors, setErrors] = useState({})
    const [credentialErr,setCredentialErr]=useState('')
    const [loading,setLoading]=useState(false)


    // handle input change
    const handleChange = (e) => {
        // prevent the default fomr submission
        e.preventDefault()
        //   const name=e.target.name
        //   const value =e.target.value
        // destructuring
        const { name, value } = e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value

        }))
        // console.log(e)
    }

    // validate the form
    const validate=()=>{
        const NewErrors={}

        if(formData.email.length<1){
            NewErrors.email="Email is required"
        }

        if(formData.password.length<1){
            NewErrors.password="password is required"
        }

        
        console.log(NewErrors)
        return NewErrors
        


    }
    // handle submit
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const formErrors=validate()
        // we are counting the keys of the newErros object in the validate function
        // if the keys is greater than 0, that means there is an error and we have to display the error 
        if(Object.keys(formErrors).length>0){
            setErrors(formErrors)
            console.log(errors)
        }
        else{

            // setErrors({})
            console.log("form is submitted")
            setLoading(true)
            // send our form data to the API
            try{

                const url="/api/login/"
                const res=await fetch(url, {
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                        
                    },
                    body:JSON.stringify(formData)
                })
                
                if(res.ok){
                    // route the user to teh dashboard
                    router.push('/dashboard')
                    setLoading(false)
                }
                else{
                    setCredentialErr("Inavlid credentials")
                    setLoading(false)
                }
                
            }
            
            catch(err){
                
                console.log(err.message)
                setErrors({apiError:"error occured"})
            }
        }
    }



    return (
        <form className='flex justify-center flex-col items-center' onSubmit={handleSubmit}>
            {credentialErr &&( <p className="bg-red-600 text-white text-center  rounded">{credentialErr}</p>)}
            <div className='flex flex-col mb-4 w-1/4'>
                <label htmlFor="">Email</label>
                <input  onChange={handleChange} name="email" type="text" className='ring ring-gray-500 px-4 py-2' />
              {errors.email &&( <p className='text-sm text-red-400 font-semibold'> {errors.email}</p>)} 
            </div>
            <div className='flex flex-col mb-4 w-1/4'>
                <label htmlFor="">Password</label>
                <input onChange={handleChange} name="password" type="text" className='ring ring-gray-500 px-4 py-2' />
                {errors.password &&( <p className='text-sm text-red-400 font-semibold'> {errors.password}</p>)} 
            </div>
           
            
                {errors.apiError &&( <p className='text-sm text-red-400 font-semibold'> {errors.apiError}</p>)} 

            <button className="bg-green-600 text-white px-4 py-2 "> {loading ? (<span className="loader"></span>) : 'submit' } 
                
            </button>


        </form>

        /* HTML: <div class="loader"></div> */

    )
}
