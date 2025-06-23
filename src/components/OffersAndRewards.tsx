import React from 'react'
import Offers from './Offers'
import { RiDiscountPercentFill } from "react-icons/ri";


const OffersAndRewards = () => {
  const settings = {
  width: 300,
  height: 150,
  image: '/scratch-overlay.png', // a gray/silver scratch texture
  finishPercent: 50,
  onComplete: () => alert('🎉 You won 500 XP!'),
};

  return (
     <section className='pb-8'>
        <h1 className='text-black dark:text-white md:text-3xl sm:text-xl text-lg font-bold px-4 md:px-0'>Offers & Rewards</h1>


<div className='md:px-0 p-4 flex sm:flex-row flex-col flex-wrap gap-4 my-4'>

  <div className='w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]'>
         <Offers Icon={RiDiscountPercentFill} CTA={"Claim Now"} title={" 20% Off on Zomato Orders"} desc={"Enjoy flat 20% off on your next food order. Valid for orders above ₹299.🍔 Delivered with taste."}/>
       </div>
       <div className='w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]'>
         <Offers Icon={RiDiscountPercentFill} CTA={"Unlock Reward"} title={"Free ₹500 Swiggy Voucher"} desc={"Pay any bill this week and unlock a ₹500 Swiggy voucher.🔥 Hunger meets hustle. Limited time only!"}/>
       </div>
        <div className='w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]'>
         <Offers Icon={RiDiscountPercentFill} CTA={"Level Up to Claim"} title={"1-Month Spotify Premium"} desc={"Get 1 month of ad-free music when you level up to Level 4.🎧 Your soundtrack to success starts here."}/>
       </div>
        <div className='w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]'>
         <Offers Icon={RiDiscountPercentFill} CTA={"Redeem Now"} title={"Flipkart ₹1000 Shopping Credit"} desc={"Redeem 5000 reward points to get ₹1000 Flipkart credit.🛍️ Because you earned it. Literally."}/>
       </div>
        <div className='w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]'>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-5 flex flex-col justify-between w-full max-w-sm">
  <div className="flex items-center gap-3 mb-4">
    <span className="text-2xl">👥</span>
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
      Refer & Earn ₹200 + 1000 XP
    </h3>
  </div>
  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
    Invite your friends to join. Get ₹200 + 1000 XP when they pay their first bill.
  </p>

  <div className="flex items-center justify-between">
    <p className="text-sm text-green-500 font-medium">Unlimited invites</p>
    <button className="bg-emerald-500 text-white px-4 py-2 text-sm rounded hover:bg-emerald-600 transition">
      Invite Now
    </button>
  </div>
</div>


       </div>
        

  </div>       


        
    </section>
  )
}

export default OffersAndRewards