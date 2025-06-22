import React from 'react'
import Profile from './Profile'
import BalanceAmount from './BalanceAmount'
import RewardPoints from './RewardPoints'
import Payments from './Payments'
import MonthlyPaymentsChart from './MonthlyPaymentsChart'


const HeroSection = () => {
  return (
    <div className='md:px-0 p-4 flex sm:flex-row flex-col flex-wrap gap-4'>
        <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
    <Profile />
  </div>
  <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
    <BalanceAmount />
  </div>
  <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
   <RewardPoints />
  </div>
  <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
   <Payments />
  </div>
   <div className="flex-1 min-w-[200px]">
    <MonthlyPaymentsChart />
  </div>
    </div>
  )
}

export default HeroSection