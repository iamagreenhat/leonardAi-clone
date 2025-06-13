
"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default   function BlogPage() {
    const [blogPost,setblogPost]=useState()
    const getBlog=async ()=>{
        const res=await fetch('/api/blog')
        const data=await res.json()
        setblogPost(data)
        console.log(data)
    }

    useEffect(()=>{
        getBlog()
    },[])
   
  return (
    <div className='flex gap-5 justify-center'>
      {blogPost?.length>0?  blogPost.map(post=>(
            <div className="shadow-lg ring-1 ring-gray text-white ">
                <Image src='/hero.jpg' width={300} height={400} alt={post.title}/>
               <h2>{post.title}</h2>
               <p className="text-gray">{post.body.slice(0,10)}...... <Link href={`/blogs/${post._id}`} className='text-purple-500 underline'>Read More</Link></p>
               <span>Category:{post.category}</span>
            </div>
        )) : "loading"}
    </div>
  )
}
