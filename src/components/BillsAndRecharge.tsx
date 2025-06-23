
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
import { usePaymentStore } from '@/store/paymentStore';
import { useRewardStore } from '@/store/RewardStore';

const BillsAndRecharge = () => {

const { pay } = usePaymentStore();
const { update } = useRewardStore();

const handleBillPayment = (value: number) =>{
  pay(value)
  update(20)
}

  
  return (
    <section className=''>
        <h1 className='text-black dark:text-white md:text-3xl sm:text-xl text-lg font-bold px-4 md:px-0'>Bills & Recharge</h1>
 <div className="p-4 flex flex-row  flex-wrap gap-4 md:px-0 mx-auto">

  <button onClick={()=>(handleBillPayment(100))} className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={TbDeviceMobileBolt } text={"Mobile Recharge"} />
  </button>
   <button onClick={()=>(handleBillPayment(120))} className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.999rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={TbDeviceLandlinePhone } text={"Broadband / Landline"} />
  </button>
   <button onClick={()=>(handleBillPayment(120))} className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.999rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={MdOutlineConnectedTv } text={"DTH / Cable TV"} />
  </button>
   <button onClick={()=>(handleBillPayment(100))} className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.999rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={IoBulbOutline } text={"Electricity"} />
  </button>

  <button onClick={()=>(handleBillPayment(140))} className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.999rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={FaCarOn } text={"FASTag"} />
  </button>
   <button onClick={()=>(handleBillPayment(170))} className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.999rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={MdOutlineWaterDrop } text={"Water Bill"} />
  </button>
   <button onClick={()=>(handleBillPayment(190))} className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.999rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={FaFire } text={"Piped Gas"} />
  </button>
   <button onClick={()=>(handleBillPayment(200))} className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.999rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={FaHouseDamage } text={"Rent"} />
  </button>

  <button onClick={()=>(handleBillPayment(10))} className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.999rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={FaHandHoldingHeart } text={"Donation"} />
  </button>
   <button onClick={()=>(handleBillPayment(100))} className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.999rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={RiMoneyDollarBoxLine } text={"Loan EMI"} />
  </button>
   <button onClick={()=>(handleBillPayment(99))} className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.999rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={MdSubscriptions } text={"Subscriptions"} />
  </button>
   <button onClick={()=>(handleBillPayment(40))} className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.999rem)] lg:w-[calc(25%-0.75rem)]">
    <Recharges Icon={FaGift } text={"Gift Card"} />
  </button>
  
</div>


        
    </section>
  )
}

export default BillsAndRecharge