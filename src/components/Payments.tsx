import React, { useState } from 'react';
import CreditCard from './CreditCard';
import { usePaymentStore } from '@/store/paymentStore';
import { useRewardStore } from '@/store/RewardStore';
import toast from 'react-hot-toast';
import { useThemeStore } from '@/store/themeStore';

const Payments = () => {
  const [inputAmount, setInputAmount] = useState('');
  const { deposit } = usePaymentStore();
  const { update } = useRewardStore();
  const { theme } = useThemeStore();

  // 🧾 Handle Payment Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = parseFloat(inputAmount);
    if (!isNaN(value) && value > 0) {
      deposit(value);
      update(40); // Reward XP for payment
      setInputAmount(''); // Reset field

      // Vibrate for feedback
      navigator.vibrate?.(150);

      // 🎉 Show themed toast
      toast.success('Payment Successful!', {
        style: {
          borderRadius: '10px',
          background: theme === 'dark' ? '#020618' : '#f1f5f9',
          color: theme === 'dark' ? '#f9fafb' : '#1e293b',
        },
      });
    }
  };

  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden rounded-lg p-[3px] w-full border dark:border-slate-800 border-slate-300">
      {/* 💳 Card Display + Form */}
      <div className="relative z-10 flex flex-col gap-4 w-full rounded-lg dark:bg-slate-950 bg-slate-100 text-black text-sm font-medium dark:text-white backdrop-blur-3xl py-4 md:px-4 lg:px-12 px-2">

        {/* 🪪 Credit Card */}
        <CreditCard />

        {/* 💰 Payment Form */}
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          
          {/* Input Field */}
          <div className="flex h-10 w-full items-center dark:bg-[#09090b] bg-white shadow-lg border dark:border-white/10 border-slate-400 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-400 dark:focus-within:ring-gray-700 dark:focus-within:ring-offset-[#09090b] focus-within:ring-offset-gray-300 transition-all">
            <span className="ml-2">$</span>
            <input
              required
              className="bg-transparent dark:text-[#f4f4f5] px-3 py-1 focus:outline-none w-full"
              pattern="^[0-9,]*$"
              type="text"
              placeholder="0,00"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
            />
            <span className="mr-2">USD</span>
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            className="relative w-full inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
          >
            {/* Animated Border */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]" />
            
            {/* Button Text */}
            <span className="inline-flex h-full w-full items-center justify-center rounded-lg dark:bg-slate-950 bg-white px-7 text-sm font-medium dark:text-white text-black backdrop-blur-3xl">
              Pay Now
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Payments;
