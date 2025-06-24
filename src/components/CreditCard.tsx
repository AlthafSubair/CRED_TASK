import React from 'react';
import Image from 'next/image';

const CreditCard = () => {
  return (
    <div className="w-full flex flex-col justify-between relative h-52 rounded-md text-white overflow-hidden px-4 py-4
      bg-[linear-gradient(to_right,#e7029a_0%,#f472b6_80%)]">
      
      {/* 💠 Decorative Circles */}
      <div className="absolute -top-2 -right-10 w-28 h-28 bg-white/10 rounded-full z-10" />
      <div className="absolute -bottom-2 -right-10 w-36 h-36 bg-white/5 rounded-full z-20" />

      {/* 🧾 Cardholder Info + Logo */}
      <div className="flex flex-row justify-between items-center z-30">
        <div className="space-y-2">
          <h1 className="font-light">Cardholder Name</h1>
          <h2 className="md:font-semibold">Walter Disney</h2>
        </div>

        {/* 🏦 Card Logo */}
        <Image
          src="/card-logo.png"
          alt="card-logo"
          width={56}
          height={56}
          className="w-14 h-14 z-50"
        />
      </div>

      {/* 🔢 Card Number */}
      <div className="w-full flex justify-center items-center z-30">
        <h1 className="xl:text-2xl lg:text-xl text-2xl font-semibold">
          1234 5678 5645 1724
        </h1>
      </div>

      {/* 📅 Card Meta: Valid, Expiry, CVV */}
      <div className="flex flex-row justify-between z-30">
        <p>
          <span className="block font-light">Valid</span>
          <span className="block">11/18</span>
        </p>
        <p>
          <span className="block font-light">Expiry</span>
          <span className="block">12/28</span>
        </p>
        <p>
          <span className="block font-light">CVV</span>
          <span className="block">...</span>
        </p>
      </div>
    </div>
  );
};

export default CreditCard;
