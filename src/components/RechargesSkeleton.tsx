import React from 'react';

const RechargesSkeleton = () => {
  return (
    <section className="relative inline-flex overflow-hidden rounded-lg p-[3px] w-full border dark:border-slate-800 border-slate-300 animate-pulse">
      <span className="absolute inset-[-25%] z-0 bg-transparent" />
      
      {/* Inner content */}
      <div className="relative z-10 flex sm:flex-row flex-col w-full items-center rounded-lg dark:bg-slate-950 bg-slate-100 text-sm font-medium backdrop-blur-3xl">
        <div className="w-12 h-12 flex justify-center items-center m-4 rounded-full shadow-lg dark:bg-gray-900 bg-gray-300 " />
        <div className="h-4 w-24 bg-gray-300 dark:bg-slate-700 rounded sm:mb-0 mb-4" />
      </div>
    </section>
  );
};

export default RechargesSkeleton;
