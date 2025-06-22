
import React from 'react'
import CrediCard from './CrediCard'



const Payments = () => {
  return (
   <section className="relative flex flex-col justify-center items-center overflow-hidden rounded-lg p-[3px] focus:outline-none w-full border dark:border-slate-800 border-slate-300">

   

      {/* Inner content with padding and background */}
      <div className="relative z-10 flex flex-col justify-center h-72 w-full  rounded-lg dark:bg-slate-950 bg-slate-100 text-black text-sm font-medium dark:text-white backdrop-blur-3xl py-4 md:px-4 lg:px-12 px-2">

        
         
   <CrediCard />

      


      </div>

    </section>

  )
}

export default Payments