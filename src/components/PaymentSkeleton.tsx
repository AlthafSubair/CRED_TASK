import React from 'react'

const PaymentSkeleton = () => {
  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden rounded-lg p-[3px] w-full border dark:border-slate-800 border-slate-300">
      <div className="relative z-10 flex flex-col gap-4 w-full rounded-lg dark:bg-slate-950 bg-slate-100 text-sm backdrop-blur-3xl py-4 md:px-4 lg:px-12 px-2 animate-pulse">

        {/* Credit Card Skeleton */}
        <div className="w-full flex flex-col justify-between relative h-52 rounded-md overflow-hidden bg-[linear-gradient(to_right,#e7029a_0%,#f472b6_80%)] px-4 py-4">
          <div className="absolute -top-2 -right-10 w-28 h-28 bg-white/10 rounded-full z-10" />
          <div className="absolute -bottom-2 -right-10 w-36 h-36 bg-white/5 rounded-full z-20" />

          <div className="flex flex-row justify-between items-center">
            <div className="space-y-2">
              <div className="h-4 w-32 bg-white/30 rounded" />
              <div className="h-4 w-40 bg-white/50 rounded" />
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-md" />
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="h-6 w-3/4 bg-white/50 rounded" />
          </div>

          <div className="flex flex-row justify-between">
            <div className="space-y-1">
              <div className="h-3 w-10 bg-white/30 rounded" />
              <div className="h-4 w-14 bg-white/50 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-3 w-10 bg-white/30 rounded" />
              <div className="h-4 w-14 bg-white/50 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-3 w-10 bg-white/30 rounded" />
              <div className="h-4 w-8 bg-white/50 rounded" />
            </div>
          </div>
        </div>

        {/* Input Field Skeleton */}
        <div className="h-10 w-full bg-gray-300 dark:bg-slate-800 rounded-lg" />

        {/* Button Skeleton */}
        <div className="h-12 w-full bg-gray-300 dark:bg-slate-800 rounded-lg" />
        
      </div>
    </section>
    
  )
}

export default PaymentSkeleton
