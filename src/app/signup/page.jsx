"use client"

import InputExample from '@/components/Input'
import { Input } from '@headlessui/react'
import React, { useState } from 'react'
import { Button } from '@headlessui/react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
    const router=useRouter()

    
       const [formData, setFormData] = useState({
            username:"",
            email: "",
            password: "",
        })
        // Step 2: Error state
        const [errors, setErrors] = useState({})
    
    
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
    
            if(formData.username.length<1){
                NewErrors.username="username is required"
            }
    
            if(formData.email.length<1){
                NewErrors.email="email is required"
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
            // setErrors({})
            
            // send our form data to the API
            try{
                const res=await fetch('/api/signup', {
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify(formData)
                })

                console.log(res)
                if(res.ok){
                    // route to login page
                    router.replace('/login')


                }
    
            }
    
            catch(err){
    
                console.log(err.message)
                setErrors({apiError:"error occured"})
            }
        }
  return (
    <form className='flex justify-center items-center flex-col h-screen gap-4' onSubmit={handleSubmit}>
        <InputExample inputFunc={handleChange} name='username' desc="Use your real name so people will recognize you" placeholder="username" />
        {errors.username && (<p  className='text-red-600 font-bolder'>{errors.username}</p>)}

        <InputExample inputFunc={handleChange} name='email'  placeholder="Email" />
        {errors.email && (<p  className='text-red-600 font-bolder'>{errors.email}</p>)}

        <InputExample inputFunc={handleChange} name='password'  placeholder="password" desc="Password should contain at least 8 characters (uppercase,lowercase, numbers and special characters)"/>
        {errors.password && (<p  className='text-red-600 font-bolder'>{errors.password}</p>)}

            <Button type="submit" className="rounded bg-sky-600 px-4 py-2 text-sm text-white data-hover:bg-sky-500 data-hover:data-active:bg-sky-700">
     Register
    </Button>
    </form>
  )
}
