import React from "react";

export default function PriceTable3() {
  const offer = [
    {
      combo: "Smart Family Combo",
      includes: "Fibre Basic (60 Mbps) + Hindi Family Pack (DishTV)",
      bestFor: "Medium-usage homes, families",
      setup: "None",
      price: "₹749*",
    },
    {
      combo: "OTT Entertainment Combo",
      includes:
        "Fibre Basic Plus OTT (100 Mbps + Zee5, SonyLiv, YuppTV) + Super Family Pack",
      bestFor: "OTT streamers, students, families",
      setup: "None",
      price: "₹1,049*",
    },
    {
      combo: "Security Plus Plan",
      includes: "Fibre Value (125 Mbps) + 2 HD IP Cameras + Hindi Family Pack",
      bestFor: "Security-conscious families",
      setup: "₹8,999",
      price: "₹999*",
    },
    {
      combo: "6-Month Family Saver",
      includes: "Fibre Basic Neo (50 Mbps) + Hindi Family Pack (6 Months)",
      bestFor: "Budget users, prepaid customers",
      setup: "None",
      price: "₹2,994 (6 months)*",
    },
    {
      combo: "Premium Everything Pack",
      includes:
        "Fibre Premium Plus OTT (250 Mbps + Full OTT) + Maxi Sports HD + 4 CCTV",
      bestFor: "High-income homes, premium users",
      setup: "₹13,499",
      price: "₹1,799*",
    },
  ];

  return (
    <div className="pb-12 px-4 md:px-12 bg-gray-50">
      <h4 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4 text-center px-1">
        Combo Offers
      </h4>
      <div className="max-w-7xl mx-auto bg-white shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[768px] text-center">
            <div className="grid grid-cols-5 bg-blue-900 text-white text-lg font-semibold">
              <div className="px-4 py-4">Plan</div>
              <div className="px-4 py-4">Includes</div>
              <div className="px-4 py-4">Best For</div>
              <div className="px-4 py-4">One-time Setup</div>
              <div className="px-4 py-4">Monthly Price</div>
            </div>
            {offer.map((offers, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-5 text-center items-center px-2 py-5 ${
                  idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-50 transition`}
              >
                <div className="text-gray-800 font-medium px-4">
                  {offers.combo}
                </div>
                <div className="text-gray-700 px-4">{offers.includes}</div>
                <div className="text-gray-700 px-4">{offers.bestFor}</div>
                <div className="text-gray-700 px-4">{offers.setup}</div>
                <div className="text-blue-700 font-semibold px-4">
                  {offers.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
