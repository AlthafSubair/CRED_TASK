
import React, { useState } from 'react'
import CrediCard from './CreditCard'
import { usePaymentStore } from '@/store/paymentStore'
import { useXPStore } from '@/store/xpStore';



const Payments = () => {

   const [inputAmount, setInputAmount] = useState('');
  const { deposit } = usePaymentStore();
  const { inc } = useXPStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = parseFloat(inputAmount);
    if (!isNaN(value) && value > 0) {
      deposit(value);
      setInputAmount('');
      inc(10)
    }
  };

  


  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden rounded-lg p-[3px] focus:outline-none w-full border dark:border-slate-800 border-slate-300">



      {/* Inner content with padding and background */}
      <div className="relative z-10 flex gap-4 flex-col justify-center w-full  rounded-lg dark:bg-slate-950 bg-slate-100 text-black text-sm font-medium dark:text-white backdrop-blur-3xl py-4 md:px-4 lg:px-12 px-2">



        <CrediCard />

        {/* INUPUT */}

<form className='w-full gap-4 flex flex-col' onSubmit={handleSubmit}>
        <div
          className="flex h-10 dark:text-white/60 w-full items-center dark:bg-[#09090b] bg-white shadow-lg border dark:border-white/10 border-slate-400 rounded-lg focus-within:ring-2 dark:focus-within:ring-gray-700 focus-within:ring-gray-400 focus-within:ring-offset-2 dark:focus-within:ring-offset-[#09090b] focus-within:ring-offset-gray-300 transition-all duration-150 ease-in-out"
        >
          <span className="ml-2">$</span>
          <input
            required
            className="bg-transparent dark:text-[#f4f4f5] px-3 py-1 rounded-l-lg focus:outline-none w-full"
            pattern="^[0-9,]*$"
            name="text"
            type="text"
            placeholder="0,00"
             value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
          />
          <span className="mr-2">USD</span>
        </div>

        {/* BUTTON */}

        <button
        type='submit'
          className="relative w-full inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
          >
          </span>
          <span
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-slate-950 bg-white px-7 text-sm font-medium dark:text-white text-black backdrop-blur-3xl gap-2 undefined"
          >
            Pay Now

          </span>
        </button>
        </form>






      </div>

    </section>

  )
}

export default Payments