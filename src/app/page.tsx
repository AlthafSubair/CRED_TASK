"use client"
import Background from "@/components/Background";
import BillsAndRecharge from "@/components/BillsAndRecharge";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OffersAndRewards from "@/components/OffersAndRewards";





export default function Home() {


  return (
    <main className="min-h-screen bg-[#f3f3f6] dark:bg-[#03030c]">

      {/*  BackGround  */}

      <Background />


      <div className="relative z-10 flex  md:px-4 w-full flex-col">

        <Header />

        <HeroSection />

        <BillsAndRecharge />

        <OffersAndRewards />

        <Footer />

      </div>


    </main>
  );
}
