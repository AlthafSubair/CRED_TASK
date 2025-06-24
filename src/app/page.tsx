"use client"
import Background from "@/components/Background";
import Dashboard from "@/components/Dashboard";
import DashboardSkeleton from "@/components/DashboardSkeleton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";





export default function Home() {

    const [loading, setLoading] = useState(true);

  // Fake delay for loading state (e.g., 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, []);


  return (
    <main className="min-h-screen bg-[#f3f3f6] dark:bg-[#03030c] relative overflow-hidden">

      {/*  BackGround  */}
      

      <Background />


      <div className="relative z-10 flex  md:px-4 w-full flex-col">
        

        <Header />

     {
      loading ? 
      <DashboardSkeleton /> :
      <Dashboard />

     }
       
       

        <Footer />

      </div>


    </main>
  );
}
