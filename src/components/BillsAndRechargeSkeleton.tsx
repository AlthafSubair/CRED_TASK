import React from 'react';
import RechargesSkeleton from './RechargesSkeleton';

const BillsAndRechargeSkeleton = () => {
  return (
   <section>
  {/* Section heading skeleton */}
  <div className="h-6 w-40 bg-gray-300 dark:bg-slate-700 rounded mb-4 md:ml-0 ml-4 animate-pulse" />

  {/* Responsive grid: 2 (mobile) → 3 (tablet) → 4 (laptop) */}
  <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:px-0 mx-auto">
    {Array.from({ length: 12 }).map((_, i) => (
      <RechargesSkeleton key={i} />
    ))}
  </div>
</section>

  );
};

export default BillsAndRechargeSkeleton;
