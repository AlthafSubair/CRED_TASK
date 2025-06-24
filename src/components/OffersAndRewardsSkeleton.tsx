import React from 'react';
import OffersSkeleton from './OffersSkeleton';

const OffersAndRewardsSkeleton = () => {
  return (
    <section className="pb-8">
      {/* Heading */}
      <div className="h-6 w-52 bg-gray-300 dark:bg-slate-700 rounded mb-4 md:ml-0 ml-4 animate-pulse" />

      {/* Grid */}
      <div className="md:px-0 p-4 flex sm:flex-row flex-col flex-wrap gap-4 mt-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]"
          >
            <OffersSkeleton />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersAndRewardsSkeleton;
