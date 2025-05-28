import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { GoChevronDown } from "react-icons/go";

import { RiMenuFill } from "react-icons/ri";

export default function Navbar() {
  return (
    <div>
      <div className="w-full h-10 bg-purple-700 text-center flex justify-center items-center gap-4">
        <h3> flow state has launched </h3>
        <Link href="/" className={`flex items-center gap-2 group underline hover:no-underline`} >
          Check out here <FaArrowRight  className="transform group-hover:rotate-290"/> 
        </Link>
      </div>

      <nav >
        <div className="flex  px-5 gap-5 lg:px-[auto] lg:gap-2 justify-around items-center mt-4">
            <Image className="mr-auto lg:hidden"src="https://leonardo.ai/wp-content/uploads/2024/11/leonardo-logo-white-fix.svg" width={150} height={150} alt="logo"/>
            <Image className=" hidden lg:block"src="https://leonardo.ai/wp-content/uploads/2024/11/leonardo-logo-white-fix.svg" width={150} height={150} alt="logo"/>
            <Link className="hidden md:flex  items-center gap-2"href='/register'>Register  <GoChevronDown /></Link>
            <Link className="hidden lg:flex  items-center gap-2"href='/'>Solutions <GoChevronDown /></Link>
            <Link className="hidden lg:flex  items-center gap-2"href='/'>Learn <GoChevronDown /></Link>
            <Link className="hidden lg:flex  items-center gap-2"href='/'>For teams <GoChevronDown /></Link>
            <Link className="hidden lg:flex  items-center gap-2"href='/'>For Developers </Link>
            <Link className="hidden md:flex  items-center gap-2"href='/'>contact </Link>
           <button className="w-max bg-purple-400 text-white rounded-full py-3 px-4 text-xs">Launch App</button>
            <RiMenuFill className="md:hidden"/>

            
        </div>
      </nav>

      {/* hero section */}
    </div>
  );
}
