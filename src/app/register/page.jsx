"use client"

import React, { useState } from 'react'

export default function RegisterPage() {
    const [formData,setFormData]= useState({
        title:"",
        price:"",
        description:"",
        category:"",
        image:"",
    })
     // Step 2: Error state
    const [errors,setErrors]=useState({})

    // handle input change
    const handleChange=(e)=>{
        e.preventDefault()
    //   const name=e.target.name
    //   const value =e.target.value
    // destructuring
      const {name, value}= e.target
        console.log(e)
    }



  return (
    <form className='flex justify-center flex-col items-center' onSubmit={handleChange}>
        <div className='flex flex-col mb-4 w-2/4'> 
            <label htmlFor="">Title</label>
            <input name="title"  type="text"  className='ring ring-gray-500 px-4 py-2'/>
        </div>
        <div className='flex flex-col mb-4 w-2/4'> 
            <label htmlFor="">Price</label>
            <input name="price" type="text"  className='ring ring-gray-500 px-4 py-2'/>
        </div>
        <div className='flex flex-col mb-4 w-2/4'> 
            <label htmlFor="">Description</label>
            <input name="description" type="text"  className='ring ring-gray-500 px-4 py-2'/>
        </div>
        <div className='flex flex-col mb-4 w-2/4'> 
            <label htmlFor="">category</label>
            <input name="category" type="text"  className='ring ring-gray-500 px-4 py-2'/>
        </div>
        <div className='flex flex-col mb-4 w-2/4'> 
            <label htmlFor="">Image</label>
            <input name="image" type="text"  className='ring ring-gray-500 px-4 py-2'/>
        </div>

        <button className="bg-green-600 text-white px-4 py-2">Submit</button>
      
    </form>
  )
}
