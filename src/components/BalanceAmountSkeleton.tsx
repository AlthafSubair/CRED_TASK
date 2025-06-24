import React from 'react'

const BalanceAmountSkeleton = () => {
  return (
    <section className="relative flex justify-center items-center overflow-hidden rounded-lg p-[3px] w-full border dark:border-slate-800 border-slate-300">
      <div className="relative z-10 flex flex-col justify-between h-72 w-full rounded-lg dark:bg-slate-950 bg-slate-100 text-sm backdrop-blur-3xl py-6 sm:px-12 px-6 animate-pulse space-y-6">

        {/* Top Row: Label & Balance */}
        <div className="flex flex-row justify-between">
          <div>
            <div className="h-4 w-32 bg-gray-300 dark:bg-slate-700 rounded mb-2" />
            <div className="h-8 w-40 bg-gray-300 dark:bg-slate-700 rounded" />
          </div>
          <div className="flex flex-row -space-x-4 items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-slate-700" />
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-slate-700 opacity-85" />
          </div>
        </div>

        {/* Card Number */}
        <div className="h-6 w-3/4 bg-gray-300 dark:bg-slate-700 rounded mx-auto" />

        {/* Bottom Row: Name & Expiry */}
        <div className="flex flex-row justify-between">
          <div className="h-4 w-24 bg-gray-300 dark:bg-slate-700 rounded" />
          <div className="h-4 w-12 bg-gray-300 dark:bg-slate-700 rounded" />
        </div>

      </div>
    </section>
  )
}

export default BalanceAmountSkeleton
