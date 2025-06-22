import React from 'react'
import Profile from './Profile'
import BalanceAmount from './BalanceAmount'

const HeroSection = () => {
  return (
    <div className='md:px-0 p-4 flex sm:flex-row flex-col flex-wrap gap-2'>
        <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
    <Profile />
  </div>
  <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.333rem)]">
    <BalanceAmount />
  </div>
  <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.333rem)] bg-[#020618] text-white">
    ghgh
  </div>
    </div>
  )
}

export default HeroSection