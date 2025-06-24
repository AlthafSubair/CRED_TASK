import React from 'react'
import HeroSectionSkeleton from './HeroSectionSkeleton'
import BillsAndRechargeSkeleton from './BillsAndRechargeSkeleton'
import OffersAndRewardsSkeleton from './OffersAndRewardsSkeleton'

const DashboardSkeleton = () => {
  return (
   <>
         <HeroSectionSkeleton />
         <BillsAndRechargeSkeleton />
         <OffersAndRewardsSkeleton />
   </>
  )
}

export default DashboardSkeleton
