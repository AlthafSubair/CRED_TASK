import Image from 'next/image'
import React from 'react'
import ProgressBar from './ProgressBar'

const Profile = () => {
  return (
    <section className="relative inline-flex overflow-hidden rounded-lg p-[3px] focus:outline-none w-full">
      {/* Thicker, clearly visible spinning border */}
      <span className="absolute inset-[-25%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%,#e7029a_100%)]"></span>

      {/* Inner content with padding and background */}
      <div className="relative z-10 flex flex-col w-full h-72 items-center justify-center rounded-lg dark:bg-slate-950 bg-slate-100 text-black text-sm font-medium dark:text-white backdrop-blur-3xl p-4">

{/* Avatar */}
        <div className='p-[4px] rounded-full bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400'>
          <div className="w-28 h-28 rounded-full  overflow-hidden relative">
            <Image
              src="/avatar.jpg"
              alt="My Photo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className='mt-4'>
          <h1 className='lg:text-2xl md:text-xl text-lg'>
            Walter Disney
          </h1>
        </div>

        <ProgressBar />

      </div>

    </section>


  )
}

export default Profile