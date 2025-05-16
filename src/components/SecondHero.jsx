import Image from "next/image";
import React from "react";

export default function SecondHero() {
  return (
    <div className="transform -translate-y-50 flex justify-center">
      <div className="border border-white w-[65vw] h-[100vh] rounded-2xl backdrop-blur-lg flex justify-center py-8">
        <Image
          src="https://leonardo.ai/wp-content/uploads/2024/10/leoHomeUpdated-oct2024-1920x1453.jpg"
          width={500}
          height={3000}
          alt="hero-image "
          className="w-[60vw] h-[90vh] border border-white rounded-2xl"
        />
      </div>
    </div>
  );
}
