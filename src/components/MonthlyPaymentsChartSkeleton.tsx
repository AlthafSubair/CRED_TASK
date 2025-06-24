import React from 'react'
import { motion } from 'framer-motion';

const MonthlyPaymentsChartSkeleton = () => {
  return (
     <motion.div
      className="dark:bg-slate-950 border dark:border-slate-800 border-slate-300 bg-slate-100 p-6 rounded-lg shadow-md w-full mx-auto animate-pulse"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Title Skeleton */}
      <div className="h-6 w-64 bg-gray-300 dark:bg-slate-700 rounded mb-6" />

      {/* Chart area mimic */}
      <div className="w-full h-[275px] flex flex-col justify-between">
        {/* Grid lines */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-[1px] w-full bg-gray-300 dark:bg-slate-800 mb-8"></div>
        ))}

        {/* Fake line chart dots */}
        <div className="flex justify-between items-end h-full -mt-[260px] px-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gray-300 dark:bg-slate-700"
              style={{
                marginBottom: `${Math.random() * 100 + 30}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default MonthlyPaymentsChartSkeleton
