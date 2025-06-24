import { TbDeviceMobileBolt, TbDeviceLandlinePhone } from 'react-icons/tb'
import { MdOutlineConnectedTv, MdOutlineWaterDrop, MdSubscriptions } from 'react-icons/md'
import { IoBulbOutline } from 'react-icons/io5'
import { FaCarOn, FaFire, FaHandHoldingHeart, FaGift } from 'react-icons/fa6'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import { FaHouseDamage } from 'react-icons/fa'

export interface RechargeOption {
  id: number;  
  icon: React.ComponentType<{ size?: number; className?: string }>
  text: string
  amount: number
}

export const rechargeOptions: RechargeOption[] = [
  { id: 1, icon: TbDeviceMobileBolt, text: "Mobile Recharge", amount: 100 },
  { id: 2, icon: FaCarOn, text: "FASTag Recharge", amount: 140 },
  { id: 3, icon: TbDeviceLandlinePhone, text: "Broadband / Landline", amount: 120 },
  { id: 4, icon: MdOutlineConnectedTv, text: "DTH / Cable TV", amount: 120 },
  { id: 5, icon: IoBulbOutline, text: "Electricity", amount: 100 },
  { id: 6, icon: MdOutlineWaterDrop, text: "Water Bill", amount: 170 },
  { id: 7, icon: FaFire, text: "Piped Gas", amount: 190 },
  { id: 8, icon: FaHouseDamage, text: "Rent", amount: 200 },
  { id: 9, icon: FaHandHoldingHeart, text: "Donation", amount: 10 },
  { id: 10, icon: RiMoneyDollarBoxLine, text: "Loan EMI", amount: 100 },
  { id: 11, icon: MdSubscriptions, text: "Subscriptions", amount: 99 },
  { id: 12, icon: FaGift, text: "Gift Card", amount: 40 },
]
