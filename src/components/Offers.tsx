
import React from 'react'

interface Props {
  id: number;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  Badge?:React.ComponentType<{ className?: string; size?: number }>
  alert: string;
  title: string;
  desc: string;
  CTA: string;
  handleClaim: (id: number, value: number) => void;
}



const Offers = ({id, Icon, title, desc, CTA, alert, Badge, handleClaim}:Props) => {

  

  return (
     <section className="relative  inline-flex overflow-hidden rounded-lg p-[3px] focus:outline-none w-full group border dark:border-slate-800 border-slate-300">
  {/* Spinning gradient border shown on hover */}
  <span className="absolute inset-[-25%] z-0 bg-transparent transition-all duration-300 group-hover:animate-[spin_4s_linear_infinite] group-hover:bg-[conic-gradient(from_0deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%,#e7029a_100%)]"></span>

  {/* Inner content */}
   <div className="relative z-10 flex flex-col w-full  rounded-lg dark:bg-slate-950 bg-slate-100 text-black text-sm font-medium dark:text-white backdrop-blur-3xl ">


    <div className='absolute right-0 flex flex-row gap-2 bg-[#e7029a] text-white rounded-tr-md px-2 py-1'>
      <div>
        {
        Badge && <Badge size={20} className='text-white' />
      }
      </div>
      <p>{alert}</p>
    </div>

   <div className='flex flex-row  items-center'>
        <div className="w-10 h-10 flex justify-center items-center m-4 rounded-md shadow-lg dark:bg-gray-900">
            <Icon size={24} className="text-[#e7029a]"/>
        </div>
        <h1 className='font-semibold lg:text-xl md:text-lg'>{title}</h1>
   </div>
   <div>
    <p className='px-4 text-justify pb-4'>{desc}</p>
   </div>

   {/* BUTTON */}

 


<div className='mx-12 flex justify-center items-center my-4'>
<button
onClick={() => (handleClaim(id, 10))}
  className="group relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-50"
>
  {/* Outer spinning gradient border */}
  <span
    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-[#e7029a] via-[#f472b6] to-[#bd5fff]"
  ></span>

  {/* Inner content */}
  <span
    className="inline-flex h-9 w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-950 bg-white px-6 py-2 text-sm font-medium backdrop-blur-3xl transition-all duration-300 dark:group-hover:bg-slate-950/90 group-hover:bg-gray-300"
  >
    {/* Left arrow icon */}
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="mr-2 h-4 w-4 text-[#e7029a] transition-transform duration-300 group-hover:-translate-x-1"
    >
      <path
        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      ></path>
    </svg>

    {/* Text with gradient fill */}
    <span
      className="relative bg-gradient-to-r from-[#e7029a] via-[#f472b6] to-[#bd5fff] bg-clip-text text-transparent font-semibold"
    >
      {CTA}
    </span>

    {/* Right arrow icon */}
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="ml-2 h-4 w-4 text-[#bd5fff] transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M13 5l7 7-7 7M5 5l7 7-7 7"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      ></path>
    </svg>
  </span>
</button>


</div>







  </div>
</section>
  )
}

export default Offers