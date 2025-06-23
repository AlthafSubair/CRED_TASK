import React from 'react'
import Offers from './Offers'
import { RiDiscountPercentFill } from "react-icons/ri";
import RefferAndEarn from './RefferAndEarn';
import { BiFoodMenu } from 'react-icons/bi';
import { TbFlame } from 'react-icons/tb';
import { FaSpotify } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { MdMovie } from 'react-icons/md';


const OffersAndRewards = () => {
 

  return (
     <section className='pb-8'>
        <h1 className='text-black dark:text-white md:text-3xl sm:text-xl text-lg font-bold px-4 md:px-0'>Offers & Rewards</h1>


<div className='md:px-0 p-4 flex sm:flex-row flex-col flex-wrap gap-4 my-4'>

  <div className='w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]'>
         <Offers Icon={BiFoodMenu} CTA={"Claim Now"} title={" 20% Off on Zomato Orders"} desc={"Enjoy flat 20% off on your next food order. Valid for orders above ₹299.🍔 Delivered with taste."}/>
       </div>
       <div className='w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]'>
         <Offers Icon={TbFlame} CTA={"Unlock Reward"} title={"Free ₹500 Swiggy Voucher"} desc={"Pay any bill this week and unlock a ₹500 Swiggy voucher.🔥 Hunger meets hustle. Limited time only!"}/>
       </div>
        <div className='w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]'>
         <Offers Icon={FaSpotify} CTA={"Level Up to Claim"} title={"1-Month Spotify Premium"} desc={"Get 1 month of ad-free music when you level up to Level 4.🎧 Your soundtrack to success starts here."}/>
       </div>

        <div className='w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]'>
         <Offers Icon={FiShoppingBag} CTA={"Redeem Now"} title={"Flipkart ₹1000 Shopping Credit"} desc={"Redeem 5000 reward points to get ₹1000 Flipkart credit.🛍️ Because you earned it. Literally."}/>
       </div>

       <div className='w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]'>
         <Offers Icon={MdMovie} CTA={"Unlock Now"} title={"	3-Month Amazon Prime "} desc={" Stream your favorites, on us. Reach 8000 XP and unlock 3 months of Prime Video."}/>
       </div>


       <div className='w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]'>
      <RefferAndEarn />
       </div>
        

  </div>       


        
    </section>
  )
}

export default OffersAndRewards