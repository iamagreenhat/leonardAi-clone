
"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
    const param=useParams()
    const {id}=param
    const [blog,setBlog]=useState()

    console.log(id)
    const getBlogData=async ()=>{
        const res=await fetch(`/api/blog/${id}`)
        const data=await res.json()
        setBlog(data)
        console.log(data)
        
    }

    useEffect(()=>{
        getBlogData()
    },[])
    return (
    <div>

        {blog ?(
           <div className='flex flex-col gap-3'>

     <span>Title: {blog.title}</span>
     <span>body: {blog.body}</span>
     <span>date Uploaded: {blog.createdAt.slice(0,13)}</span>
     <span>Category: {blog.category}</span>
     <span>description: {blog.description}</span>
     <div className="flex gap-3">
        <button className="w-max border-0 bg-red-500 text-white rounded px-2 py-2 ">Delete</button>
        <button className="w-max border-0 bg-gray-400 text-white rounded px-2 py-2 ">Edit</button>
     </div>
    </div>) :"loading.."}
           </div>
  )
}
