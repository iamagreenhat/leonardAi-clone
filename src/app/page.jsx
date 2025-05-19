import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
  <div className="hero">
     <Navbar/>
    <Hero/>
    <Card/>
    {/* sponsor section */}
    <div className="py-15">
      <h2 className="text-center text-xl font-bold py-5">As Featured In</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-x-5 w-full content-center place-content-center ">
        <Image src="https://leonardo.ai/wp-content/uploads/2024/07/fortune.svg" width={300} height={200} className="w-[150px] h-[200px] mx-auto"/>
        <Image src="https://leonardo.ai/wp-content/uploads/2024/07/forbes.svg" width={300} height={200} className="w-[150px] h-[200px] mx-auto"/>
        <Image src="https://leonardo.ai/wp-content/uploads/2024/07/techcrunch.svg" width={300} height={200} className="w-[150px] h-[200px] mx-auto"/>
        <Image src="https://leonardo.ai/wp-content/uploads/2024/07/business-insider.svg" width={300} height={200} className="w-[150px] h-[200px] mx-auto"/>
        <Image src="https://leonardo.ai/wp-content/uploads/2024/07/smart-company.svg" width={300} height={200} className="w-[150px] h-[200px] mx-auto"/>
        <Image src="https://leonardo.ai/wp-content/uploads/2024/07/financial-review.svg" width={300} height={200} className="w-[150px] h-[200px] mx-auto"/>
      </div>
    </div>

    
  </div>
  );
}
