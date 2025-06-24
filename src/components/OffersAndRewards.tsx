import React, { useState } from 'react'
import Offers from './Offers'
import RefferAndEarn from './RefferAndEarn'
import { offersData } from '@/database/Offers'
import { useXPStore } from '@/store/xpStore'
import toast from 'react-hot-toast'
import { useThemeStore } from '@/store/themeStore'
import XpProgressPopUp from './XpProgressPopUp'


const OffersAndRewards = () => {

const [offers, setOffers] = useState(offersData)
const [popUp, setPopUp] = useState(false)
const { inc } = useXPStore()
const { theme } = useThemeStore()

const handleClaim = (id: number, value: number) =>{

  setOffers(offers.filter((offer) => offer?.id !== id))
  inc(value)
  setPopUp(true)
    navigator.vibrate?.(150) // vibrate mobile
      toast.success("Offer claimed Successful!",{
        style: {
    borderRadius: '10px',
    background: theme === "dark" ? '#020618' : '#f1f5f9', 
    color: theme === "dark" ? '#f9fafb' : '#1e293b',       
  },
      })
}

  return (
    <section className="pb-8">
      <h1 className="text-black dark:text-white md:text-3xl sm:text-xl text-lg font-bold px-4 md:px-0">
        Offers & Rewards
      </h1>

      <div className="md:px-0 p-4 flex sm:flex-row flex-col flex-wrap gap-4 mt-4">
        {/* Render 5 offers */}
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

        {/* Render custom RefferAndEarn block as 6th item */}
        <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
          <RefferAndEarn />
        </div>

{
  popUp &&(
    <XpProgressPopUp onClose={()=>setPopUp(false)}/>
  )}


      </div>
    </section>
  )
}

export default OffersAndRewards
