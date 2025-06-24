import React from 'react';

import Profile from './Profile';
import BalanceAmount from './BalanceAmount';
import RewardPoints from './RewardPoints';
import Payments from './Payments';
import MonthlyPaymentsChart from './MonthlyPaymentsChart';

const HeroSection = () => {
  return (
    <div className="p-4 md:px-0 flex flex-wrap gap-4">
      
      {/* 👤 Profile Card */}
      <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
        <Profile />
      </div>

      {/* 💰 Available Balance Card */}
      <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
        <BalanceAmount />
      </div>

      {/* 🎯 Reward Points Card */}
      <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
        <RewardPoints />
      </div>

      {/* 💳 Payments Info */}
      <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
        <Payments />
      </div>

      {/* 📊 Monthly Payments Chart */}
      <div className="flex-1 min-w-[200px]">
        <MonthlyPaymentsChart />
      </div>
    </div>
  );
};

export default HeroSection;
