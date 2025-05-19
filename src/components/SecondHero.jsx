import Image from "next/image";
import React from "react";

export default function SecondHero() {
  return (
    <div className="transform -translate-y-70 md:-translate-y-40 flex justify-center items-center relative overflow-hidden">
      <div className="border border-white w-[25vw] rounded-2xl backdrop-blur-lg flex justify-center items-center py-4 px-4 absolute -left-60 transform -rotate-25">
          <Image
          src="https://leonardo.ai/wp-content/uploads/2024/07/Shoey2-1.jpg"
          width={500}
          height={3000}
          alt="hero-image "
          className="w-[25vw] h-[40vh] border border-white rounded-2xl"
        />
      </div>
      <div className="border border-white w-[75vw] h-[100vh] rounded-2xl backdrop-blur-lg flex justify-center py-8">
        <Image
          src="https://leonardo.ai/wp-content/uploads/2024/10/leoHomeUpdated-oct2024-1920x1453.jpg"
          width={500}
          height={3000}
          alt="hero-image "
          className="w-[70vw] h-[90vh] border border-white rounded-2xl object-center"
        />
      </div>

      <div className="border border-white w-[15vw] rounded-2xl backdrop-blur-lg flex justify-center items-center py-4 px-4 absolute -right-20 transform rotate-25">
          <Image
          src="https://leonardo.ai/wp-content/uploads/2024/05/UniversalUpscaler-1280x854.jpg"
          width={500}
          height={3000}
          alt="hero-image "
          className="w-[15vw] h-[40vh] border border-white rounded-2xl"
        />
      </div>
    </div>
  );
}
