import React from 'react';

import ProfileSkeleton from './ProfileSkeleton';
import BalanceAmountSkeleton from './BalanceAmountSkeleton';
import RewardPointSkeleton from './RewardPointSkeleton';
import PaymentSkeleton from './PaymentSkeleton';
import MonthlyPaymentsChartSkeleton from './MonthlyPaymentsChartSkeleton';

const HeroSectionSkeleton = () => {
  return (
    <div className="p-4 md:px-0 flex flex-wrap gap-4">
      
      {/* 🕴️ Profile Placeholder */}
      <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
        <ProfileSkeleton />
      </div>

      {/* 💰 Balance Placeholder */}
      <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
        <BalanceAmountSkeleton />
      </div>

      {/* ⭐ Rewards Placeholder */}
      <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
        <RewardPointSkeleton />
      </div>

      {/* 💳 Payments Placeholder */}
      <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
        <PaymentSkeleton />
      </div>

      {/* 📊 Chart Placeholder */}
      <div className="flex-1 min-w-[200px]">
        <MonthlyPaymentsChartSkeleton />
      </div>

    </div>
  );
};

export default HeroSectionSkeleton;
