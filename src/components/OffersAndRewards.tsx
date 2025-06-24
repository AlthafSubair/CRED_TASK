import React from 'react'
import Offers from './Offers'
import RefferAndEarn from './RefferAndEarn'
import { offersData } from '@/database/Offers'


const OffersAndRewards = () => {



  return (
    <section className="pb-8">
      <h1 className="text-black dark:text-white md:text-3xl sm:text-xl text-lg font-bold px-4 md:px-0">
        Offers & Rewards
      </h1>

      <div className="md:px-0 p-4 flex sm:flex-row flex-col flex-wrap gap-4 mt-4">
        {/* Render 5 offers */}
        {offersData.map((offer) => (
          <div
            key={offer.id}
            className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]"
          >
            <Offers
              Icon={offer.Icon}
              Badge={offer.Badge}
              alert={offer.alert}
              CTA={offer.CTA}
              title={offer.title}
              desc={offer.desc}
            />
          </div>
        ))}

        {/* Render custom RefferAndEarn block as 6th item */}
        <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
          <RefferAndEarn />
        </div>
      </div>
    </section>
  )
}

export default OffersAndRewards
