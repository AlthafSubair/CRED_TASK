// src/data/offersData.ts

import { BiFoodMenu } from 'react-icons/bi'
import { TbFlame } from 'react-icons/tb'
import { FaSpotify } from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi'
import { MdMovie } from 'react-icons/md'
import { IoIosAlarm } from 'react-icons/io'

export interface OfferItem {
  id: number
  Icon: React.ComponentType<{ size?: number }>
  Badge?: React.ComponentType<{ size?: number }>
  alert: string
  CTA: string
  title: string
  desc: string
}

export const offersData: OfferItem[] = [
  {
    id: 1,
    Icon: BiFoodMenu,
    Badge: IoIosAlarm,
    alert: '3 day left',
    CTA: 'Claim Now',
    title: '20% Off on Zomato Orders',
    desc: 'Enjoy flat 20% off on your next food order. Valid for orders above ₹299.🍔 Delivered with taste.',
  },
  {
    id: 2,
    Icon: TbFlame,
    Badge: IoIosAlarm,
    alert: 'Limited time offer',
    CTA: 'Unlock Reward',
    title: 'Free ₹500 Swiggy Voucher',
    desc: 'Pay any bill this week and unlock a ₹500 Swiggy voucher.🔥 Hunger meets hustle. Limited time only!',
  },
  {
    id: 3,
    Icon: FaSpotify,
    alert: 'XP Bonus: +300',
    CTA: 'Level Up to Claim',
    title: '1-Month Spotify Premium',
    desc: 'Get 1 month of ad-free music when you level up to Level 4.🎧 Your soundtrack to success starts here.',
  },
  {
    id: 4,
    Icon: FiShoppingBag,
    Badge: IoIosAlarm,
    alert: '2 day left',
    CTA: 'Redeem Now',
    title: 'Flipkart ₹1000 Shopping Credit',
    desc: 'Redeem 5000 reward points to get ₹1000 Flipkart credit.🛍️ Because you earned it. Literally.',
  },
  {
    id: 5,
    Icon: MdMovie,
    alert: 'XP Bonus: +500',
    CTA: 'Unlock Now',
    title: '3-Month Amazon Prime',
    desc: 'Stream your favorites, on us. Reach 8000 XP and unlock 3 months of Prime Video.',
  },
]
