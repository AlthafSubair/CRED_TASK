import React from 'react'

const RewardPointSkeleton = () => {
  return (
   <section className="relative inline-flex overflow-hidden rounded-lg p-[3px] w-full border dark:border-slate-800 border-slate-300">
      {/* Optional spinning border can be uncommented if needed */}
      {/* <span className="absolute inset-[-25%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%,#e7029a_100%)]"></span> */}

      <div className="relative z-10 flex flex-col w-full lg:h-72 md:h-[22.5rem] h-72 items-center justify-center rounded-lg dark:bg-slate-950 bg-slate-100 text-sm font-medium backdrop-blur-3xl p-4 animate-pulse">
        
        {/* Heading Skeleton */}
        <div className="h-6 w-56 bg-gray-300 dark:bg-slate-700 rounded mb-8" />

        {/* Arc-like Circular Progress Skeleton */}
        <div className="relative w-36 h-36">
          {/* Arc (not full circle) mimic using border animation */}
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-[8px] border-t-gray-300 border-l-transparent border-b-transparent border-r-transparent dark:border-t-slate-700" />
          <div className="absolute inset-3 rounded-full bg-gray-200 dark:bg-slate-800" />
        </div>

      </div>
    </section>
  )
}

export default RewardPointSkeleton
