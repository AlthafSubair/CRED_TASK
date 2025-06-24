"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import Background from "@/components/Background";
import Dashboard from "@/components/Dashboard";
import DashboardSkeleton from "@/components/DashboardSkeleton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // 🔄 Simulate loading delay (2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // 🧹 Cleanup on unmount
  }, []);

  return (
    <main className="min-h-screen bg-[#f3f3f6] dark:bg-[#03030c] relative overflow-hidden">
      
      {/* 🔔 Toast Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000 }}
      />

      {/* 🖼️ Background Layer */}
      <Background />

      {/* 💻 Main Content */}
      <div className="relative z-10 flex w-full flex-col md:px-4">
        
        {/* 🔝 Top Navbar */}
        <Header />

        {/* 📦 Dashboard or Skeleton */}
        {loading ? <DashboardSkeleton /> : <Dashboard />}

        {/* 🔚 Footer */}
        <Footer />
      </div>
    </main>
  );
}
