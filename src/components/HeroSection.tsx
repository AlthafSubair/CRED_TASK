import React from 'react'
import Profile from './Profile'
import BalanceAmount from './BalanceAmount'
import RewardPoints from './RewardPoints'
import Payments from './Payments'


const HeroSection = () => {
  return (
    <div className='md:px-0 p-4 flex sm:flex-row flex-col flex-wrap gap-2'>
        <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
    <Profile />
  </div>
  <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.333rem)]">
    <BalanceAmount />
  </div>
  <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.333rem)]">
   <RewardPoints />
  </div>
  <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.333rem)]">
   <Payments />
  </div>
    </div>
  )
}

export default HeroSection