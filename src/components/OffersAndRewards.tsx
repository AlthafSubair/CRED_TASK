import React, { useState } from 'react';
import Offers from './Offers';
import RefferAndEarn from './RefferAndEarn';
import { offersData } from '@/database/Offers';
import { useXPStore } from '@/store/xpStore';
import toast from 'react-hot-toast';
import { useThemeStore } from '@/store/themeStore';
import XpProgressPopUp from './XpProgressPopUp';

const OffersAndRewards = () => {
  const [offers, setOffers] = useState(offersData);
  const [popUp, setPopUp] = useState(false);

  const { incXP } = useXPStore(); // Increase XP
  const { theme } = useThemeStore(); // For toast styling

  // 🎯 Handle when offer is claimed
  const handleClaim = (id: number, value: number) => {
    // Remove claimed offer
    setOffers((prev) => prev.filter((offer) => offer?.id !== id));

    // Add XP
    incXP(value);

    // Show XP progress popup
    setPopUp(true);

    // Mobile vibration feedback
    navigator.vibrate?.(150);

    // Toast notification with theme-aware styling
    toast.success('Offer claimed Successful!', {
      style: {
        borderRadius: '10px',
        background: theme === 'dark' ? '#020618' : '#f1f5f9',
        color: theme === 'dark' ? '#f9fafb' : '#1e293b',
      },
    });
  };

  return (
    <section className="pb-8">
      {/* Section Heading */}
      <h1 className="text-black dark:text-white md:text-3xl sm:text-xl text-lg font-bold px-4 md:px-0  pt-2">
        Offers & Rewards
      </h1>

      {/* Offers List */}
      <div className="md:px-0 p-4 flex flex-wrap gap-4 mt-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]"
          >
            <Offers
              id={offer.id}
              Icon={offer.Icon}
              Badge={offer.Badge}
              alert={offer.alert}
              CTA={offer.CTA}
              title={offer.title}
              desc={offer.desc}
              handleClaim={handleClaim}
            />
          </div>
        ))}

        {/* 👥 Refer and Earn block (always last card) */}
        <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
          <RefferAndEarn />
        </div>

        {/* 🎉 XP Progress Modal */}
        {popUp && <XpProgressPopUp onClose={() => setPopUp(false)} />}
      </div>
    </section>
  );
};

export default OffersAndRewards;

