import React from 'react'
import Recharges from './Recharges'
import { TbDeviceMobileBolt } from 'react-icons/tb'
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdOutlineConnectedTv } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { FaCarOn } from "react-icons/fa6";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdSubscriptions } from "react-icons/md";
import { FaGift } from "react-icons/fa";

const BillsAndRecharge = () => {
  return (
    <section className='pb-8'>
        <h1 className='text-black dark:text-white md:text-3xl sm:text-xl text-lg font-bold px-4 md:px-0'>Bills & Recharge</h1>
 <div className="p-4 flex sm:flex-row flex-col flex-wrap gap-4 md:px-0">

  <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={TbDeviceMobileBolt } text={"Mobile Recharge"} />
  </div>
   <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={TbDeviceLandlinePhone } text={"Broadband / Landline"} />
  </div>
   <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={MdOutlineConnectedTv } text={"DTH / Cable TV"} />
  </div>
   <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={IoBulbOutline } text={"Electricity"} />
  </div>

  <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={FaCarOn } text={"FASTag Recharge"} />
  </div>
   <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={MdOutlineWaterDrop } text={"Water Bill"} />
  </div>
   <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={FaFire } text={"Piped Gas"} />
  </div>
   <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={FaHouseDamage } text={"Rent"} />
  </div>

  <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={FaHandHoldingHeart } text={"Donation"} />
  </div>
   <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={RiMoneyDollarBoxLine } text={"Loan EMI"} />
  </div>
   <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={MdSubscriptions } text={"Subscriptions"} />
  </div>
   <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={FaGift } text={"Gift Card"} />
  </div>
  
</div>


        
    </section>
  )
}

export default BillsAndRecharge