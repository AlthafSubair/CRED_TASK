import React from 'react'
import ProfileSkeleton from './ProfileSkeleton'
import BalanceAmountSkeleton from './BalanceAmountSkeleton'
import RewardPointSkeleton from './RewardPointSkeleton'
import PaymentSkeleton from './PaymentSkeleton'
import MonthlyPaymentsChartSkeleton from './MonthlyPaymentsChartSkeleton'

const HeroSectionSkeleton = () => {
  return (
      <div className='md:px-0 p-4 flex sm:flex-row flex-col flex-wrap gap-4'>
        <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
    <ProfileSkeleton />
  </div>
  <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
    <BalanceAmountSkeleton />
  </div>
  <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
   <RewardPointSkeleton />
  </div>
  <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
   <PaymentSkeleton />
  </div>
   <div className="flex-1 min-w-[200px]">
    <MonthlyPaymentsChartSkeleton />
  </div>
    </div>
  )
}

export default HeroSectionSkeleton
