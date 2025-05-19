"use client"
import React, { useState } from 'react'
import { IoArrowForwardCircle } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Card() {

    const [limit,setLimit]=useState(3)

    const handleLimit=()=>{
        setLimit((prev)=>prev+3)
    }
    const cardDetails = [
        {
            id: 1,
            title: "For creators",
            desc: "Create production-quality visual assets for your projects with unprecedented quality, >speed, and style-consistency."
        },
        {
            id: 2,
            title: "For Teams",
            desc: "Bring your team's best ideas to life at scale, with our intuitive AI-first creative suite designed for collaboration and built for business.."
        },
        {
            id: 3,
            title: "For Developers",
            desc: "Experience content creation excellence with Leonardo.AI's API. With unmatched scalability, effortlessly tailor outputs to your brand guideline"
        },
        {
            id: 3,
            title: "For Developers",
            desc: "Experience content creation excellence with Leonardo.AI's API. With unmatched scalability, effortlessly tailor outputs to your brand guideline"
        },
        {
            id: 3,
            title: "For Developers",
            desc: "Experience content creation excellence with Leonardo.AI's API. With unmatched scalability, effortlessly tailor outputs to your brand guideline"
        },
        {
            id: 3,
            title: "For Developers",
            desc: "Experience content creation excellence with Leonardo.AI's API. With unmatched scalability, effortlessly tailor outputs to your brand guideline"
        },
        {
            id: 3,
            title: "For Developers",
            desc: "Experience content creation excellence with Leonardo.AI's API. With unmatched scalability, effortlessly tailor outputs to your brand guideline"
        },
        {
            id: 3,
            title: "For Developers",
            desc: "Experience content creation excellence with Leonardo.AI's API. With unmatched scalability, effortlessly tailor outputs to your brand guideline"
        },
        {
            id: 3,
            title: "For Developers",
            desc: "Experience content creation excellence with Leonardo.AI's API. With unmatched scalability, effortlessly tailor outputs to your brand guideline"
        },
    ]
    return (
        <div className='flex gap-15 px-4 justify-center flex-wrap'>

            {
                cardDetails.slice(0,limit).map(detail => (
                    <div className='relative' key={detail.id}>
                        <div className="absolute inset-0 bg-transparent -500 rounded-4xl border hover:border-purple-400"></div>

                        <div className="w-full group  shadow border border-gray-300  p-6 capitalize flex flex-col  md:w-[400px] rounded-4xl justify-between  relative">

                            <div className="flex justify-between">
                                <h2 className="text-2xl font-bold">{detail.title}</h2>

                                <div className="w-12 h-12 rounded-full  bg-gray-800 p-2 flex items-center justify-center">
                                    <MdOutlineArrowOutward className=' transform text-3xl group-hover:rotate-45' />
                                </div>
                            </div>
                            <p className="text-wrap text-[12px] w-[80%]">{detail.desc}</p>
                        </div>


                    </div>
                ))
            }
            <button className="w-max py-2 px-5 bg-purple-500 text-white" onClick={handleLimit}>Load more {limit}</button>
        </div>
    )
}
