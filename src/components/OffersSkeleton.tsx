import React from 'react';

const OffersSkeleton = () => {
  return (
    <section className="relative inline-flex overflow-hidden rounded-lg p-[3px] w-full border dark:border-slate-800 border-slate-300 animate-pulse">
      {/* Spinning border (inactive for skeleton) */}
      <span className="absolute inset-[-25%] z-0 bg-transparent" />

      {/* Inner content */}
      <div className="relative z-10 flex flex-col w-full rounded-lg dark:bg-slate-950 bg-slate-100 backdrop-blur-3xl">
        {/* Top right alert badge */}
        <div className="absolute right-0 flex flex-row gap-2 bg-[#e7029a] text-white rounded-tr-md px-2 py-1">
          <div className="w-5 h-5 rounded-full bg-white/50" />
          <div className="h-3 w-14 bg-white/50 rounded" />
        </div>

        {/* Icon + title row */}
        <div className="flex flex-row items-center">
          <div className="w-10 h-10 flex justify-center items-center m-4 rounded-md dark:bg-gray-900 bg-gray-300" />
          <div className="h-5 w-32 bg-gray-300 dark:bg-slate-700 rounded" />
        </div>

        {/* Description placeholder */}
        <div className="px-4 pb-4 space-y-2">
          <div className="h-3 bg-gray-300 dark:bg-slate-700 rounded w-full" />
          <div className="h-3 bg-gray-300 dark:bg-slate-700 rounded w-5/6" />
          <div className="h-3 bg-gray-300 dark:bg-slate-700 rounded w-2/3" />
        </div>

        {/* Button skeleton */}
        <div className="mx-12 my-4">
          <div className="h-9 w-full bg-gray-300 dark:bg-slate-800 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default OffersSkeleton;
