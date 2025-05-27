import React from "react";

export default function PricingTable2() {
  const plans = [
    { name: "Hindi Family", channel: "200+", price: "₹300" },
    { name: "Super Family", channel: "250+", price: "₹350" },
    { name: "Maxi Sports", channel: "300+", price: "₹475" },
  ];

  return (
    <div className="pb-12 px-4 md:px-12 bg-gray-50 ">
      <h4 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4 text-center px-1">
        DishTV Plans
      </h4>
      <div className="max-w-7xl mx-auto  bg-white shadow-lg shadow-gray-400 rounded-xl overflow-hidden text-center">
        <div className="grid grid-cols-3 bg-blue-900 text-white text-lg font-semibold">
          <div className="px-7 py-4">Plan</div>
          <div className="px-7 py-4">Channels</div>
          <div className="px-7 py-4">Price</div>
        </div>
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`grid grid-cols-3 text-center items-center px-2 py-5 ${
              idx % 2 === 0 ? "bg-gray-100" : "bg-white"
            } hover:bg-blue-50 transition`}
          >
            <div className="text-gray-800 font-medium">{plan.name}</div>
            <div className="text-gray-700">{plan.channel}</div>
            <div className="text-blue-700 font-semibold">{plan.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
