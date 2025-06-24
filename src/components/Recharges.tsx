import React from 'react'


interface Props{
    text: string;
    Icon: React.ComponentType<{ className?: string; size?: number }>;
}

const Recharges = ({text, Icon}: Props) => {
  return (
    <section className="relative inline-flex overflow-hidden rounded-lg p-[3px] focus:outline-none w-full group border dark:border-slate-800 border-slate-300">
  {/* Spinning gradient border shown on hover */}
  <span className="absolute inset-[-25%] z-0 bg-transparent transition-all duration-300 group-hover:animate-[spin_4s_linear_infinite] group-hover:bg-[conic-gradient(from_0deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%,#e7029a_100%)]"></span>

  {/* Inner content */}
  <div className="relative z-10 flex sm:flex-row flex-col w-full items-center rounded-lg dark:bg-slate-950 bg-slate-100 text-black text-sm font-medium dark:text-white backdrop-blur-3xl">
    <div className="w-12 h-12 flex justify-center items-center m-4 rounded-full shadow-lg dark:bg-gray-900">
      <Icon size={24} className="text-[#e7029a]" />
    </div>
    <h1 className='lg:text-lg font-semibold sm:text-left text-center pb-1 sm:pb-0'>{text}</h1>
  </div>
</section>

  )
}

export default Recharges