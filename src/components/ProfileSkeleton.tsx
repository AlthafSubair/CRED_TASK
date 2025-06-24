import React from 'react'

const ProfileSkeleton = () => {
  return (
   <section className="relative inline-flex w-full overflow-hidden rounded-lg p-[3px]">
        <span className="absolute inset-[-25%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%,#e7029a_100%)]" />

        <div className="relative z-10 flex h-72 w-full flex-col items-center justify-center rounded-lg bg-slate-100 p-4 text-sm font-medium text-black backdrop-blur-3xl dark:bg-slate-950 dark:text-white">
          <div className="flex flex-col items-center animate-pulse w-full">
            {/* Avatar skeleton */}
            <div className="mb-4 shrink-0 rounded-full bg-gray-300 dark:bg-neutral-700 h-28 w-28" />

            {/* Name skeleton */}
            <div className="h-4 bg-gray-300 rounded-full dark:bg-neutral-700 w-1/3 mb-6" />

            {/* Progress skeleton bars */}
            <ul className="w-full px-8 space-y-3">
              <li className="h-4 bg-gray-300 rounded-full dark:bg-neutral-700 w-full"></li>
              <li className="h-4 bg-gray-300 rounded-full dark:bg-neutral-700 w-full"></li>
              <li className="h-4 bg-gray-300 rounded-full dark:bg-neutral-700 w-full"></li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default ProfileSkeleton