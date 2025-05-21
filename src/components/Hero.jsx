import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client"

import { BsArrowRight } from "react-icons/bs";
import SecondHero from "./SecondHero";

export default function Hero() {
  return (
    <div>
      <div className="mt-15 md:mt-6 relative w-full h-screen object-cover flex text-center flex-col lg:justify-center gap-3 ">
        <div data-aos="fade-up-left" className="hidden lg:block border-[15px] border-purple-500 rounded-2xl w-[300px] transform rotate-15 absolute -left-10 bottom-40 ">
          <Image
            src="https://leonardo.ai/wp-content/uploads/2025/05/default_insanity-square-2.jpg.webp"
            width={300}
            height={300}
            alt="hero-image"
          />
        </div>

        <h2 className="text-3xl font-medium md:text-6xl lg:text-7xl 2xl:text-6xl text-wrap">
          Creativity, Unleashed.
        </h2>
        <p className="md:font-medium md:text-2xl">
          Leverage generative AI with a unique suite of tools to<br></br> convey
          your ideas to the world.
        </p>

        <div className="mb-20  flex justify-center items-center gap-5 flex-col md:flex-row">
          <button className="bg-purple-300 text-gray-600 px-9 py-4 rounded-full hover:shadow-sm inset-shadow-violet-200  shadow-purple-300 hover:border border-white ">
            Get Started
          </button>
          <button className="flex bg-transparent text-white items-center gap-3 group">
            Developer ApI{" "}
            <BsArrowRight className="transform transition-all duration-150 ease-in group-hover:translate-x-2" />
          </button>
        </div>
        <div data-aos="fade-down-right" className=" hidden lg:block border-[10px] border-purple-500 rounded-2xl w-[280] transform -rotate-15 absolute right-6 -b">
          
              <video
                src="https://leonardo.ai/wp-content/uploads/2024/05/cat-space-med-1.mp4"
                width={280}
                height={200}
                loop
                autoPlay
                controls={false}
              />
           


        </div>
      </div>
      <SecondHero />
    </div>
  );
}
