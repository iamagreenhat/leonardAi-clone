"use client"

import React, { useState } from 'react'

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        title:"",
        price: "",
        description: "",
        category: "",
        image: "",
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

        if(formData.title.length<1){
            NewErrors.title="Title is required"
        }

        if(formData.description.length<1){
            NewErrors.description="description is required"
        }

        if(formData.category.length<1){
            NewErrors.category="category is required"
        }
        if(formData.image.length<1){
            NewErrors.image="image is required";
        }
        if(formData.price.length<1){
            NewErrors.price="price is required";
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
            return
        }
        setErrors({})
        console.log("form is submitted")
        // send our form data to the API
        try{
            const url="/api/register/"
            const res=await fetch(url, {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",

                },
                body:JSON.stringify(formData)
            })

        }

        catch(err){

            console.log(err.message)
            setErrors({apiError:"error occured"})
        }
    }



    return (
        <form className='flex justify-center flex-col items-center' onSubmit={handleSubmit}>
            <div className='flex flex-col mb-4 w-1/4'>
                <label htmlFor="">Title</label>
                <input  onChange={handleChange} name="title" type="text" className='ring ring-gray-500 px-4 py-2' />
              {errors.title &&( <p className='text-sm text-red-400 font-semibold'> {errors.title}</p>)} 
            </div>
            <div className='flex flex-col mb-4 w-1/4'>
                <label htmlFor="">Price</label>
                <input onChange={handleChange} name="price" type="number" className='ring ring-gray-500 px-4 py-2' />
                {errors.price &&( <p className='text-sm text-red-400 font-semibold'> {errors.price}</p>)} 
            </div>
            <div className='flex flex-col mb-4 w-1/4'>
                <label htmlFor="">Description</label>
                <input onChange={handleChange} name="description" type="text" className='ring ring-gray-500 px-4 py-2' />
                {errors.description &&( <p className='text-sm text-red-400 font-semibold'> {errors.description}</p>)} 
            </div>
            <div className='flex flex-col mb-4 w-1/4'>
                <label htmlFor="">category</label>
                <input onChange={handleChange} name="category" type="text" className='ring ring-gray-500 px-4 py-2' />
                {errors.category &&( <p className='text-sm text-red-400 font-semibold'> {errors.category}</p>)} 
            </div>
            <div className='flex flex-col mb-4 w-1/4'>
                <label htmlFor="">Image</label>
                <input onChange={handleChange} name="image" type="text" className='ring ring-gray-500 px-4 py-2' />
            </div>
                {errors.apiError &&( <p className='text-sm text-red-400 font-semibold'> {errors.apiError}</p>)} 

            <button className="bg-green-600 text-white px-4 py-2">Submit</button>

        </form>
    )
}
