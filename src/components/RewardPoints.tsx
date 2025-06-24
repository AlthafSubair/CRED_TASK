import React from 'react'
import CircularProgress from './CircularProgress'

const RewardPoints = () => {
  return (
    <section className="relative inline-flex overflow-hidden rounded-lg p-[3px] focus:outline-none w-full border dark:border-slate-800 border-slate-300">
    
      {/* Inner content with padding and background */}
      <div className="relative z-10 flex flex-col w-full lg:h-72 md:h-[22.5rem] h-72 items-center justify-center rounded-lg dark:bg-slate-950 bg-slate-100 text-black text-sm font-medium dark:text-white backdrop-blur-3xl p-4">

        <h1 className='text-2xl py-6 font-semibold '>Reward Points Progress</h1>

        {/* Circular reward point progress */}
        
        <CircularProgress />

      </div>

    </section>
  )
}

export default RewardPoints