
import { usePaymentStore } from '@/store/paymentStore'
import React, { useEffect, useState } from 'react'

const BalanceAmount = () => {

  const {amount} = usePaymentStore()
  const [balance, setBalance] = useState(amount)

useEffect(() => {
  const interval = setInterval(() => {
    setBalance((prev) => {
      if (prev === amount) {
        clearInterval(interval);
        return prev;
      }

      const diff = amount - prev;
      const step = diff > 0 ? 1 : -1;
      const next = prev + step;

      if (step > 0 && next >= amount) clearInterval(interval);
      if (step < 0 && next <= amount) clearInterval(interval);

      return next;
    });
  }, 10);

  return () => clearInterval(interval);
}, [amount]);


  return (
    <section className="relative flex justify-center items-center overflow-hidden rounded-lg p-[3px] focus:outline-none w-full border dark:border-slate-800 border-slate-300">

      {/* Inner content with padding and background */}
      <div className="relative z-10 flex flex-col justify-between h-72 w-full  rounded-lg dark:bg-slate-950 bg-slate-100 text-black text-sm font-medium dark:text-white backdrop-blur-3xl py-6 sm:px-12 px-6">

        <div className='flex flex-row justify-between'>
          <div>
            <h3 className='dark:text-slate-400 text-gray-600 font-semibold py-2'>Available Balance</h3>

            <h1 className='text-4xl font-bold'>$ {balance}</h1>

          </div>

          <div className='flex flex-row -space-x-4 items-center'>
            <div className='w-10 h-10 rounded-full bg-[#EB001B] '></div>
            <div className='w-10 h-10 rounded-full bg-[#F79E1B] opacity-85'></div>
          </div>

        </div>

        <div className='flex items-center justify-center'>
          <h1 className='text-2xl font-semibold'>**** **** **** 1724</h1>
        </div>

         <div className='flex flex-row justify-between text-slate-700 dark:text-slate-400'>
          <p>Walter Disney</p>
          <p>12/28</p>
        </div>


      </div>

    </section>
  )
}

export default BalanceAmount