import React from "react";

export default function PricingTable() {
  const plans = [
    {
      name: "Fibre Basic Neo",
      speed: "50 Mbps",
      data: "3300 GB",
      ott: "No",
      price: "₹449",
      price6m: "₹2694",
    },
    {
      name: "Fibre Basic",
      speed: "60 Mbps",
      data: "3300 GB",
      ott: "No",
      price: "₹499",
      price6m: "",
    },
    {
      name: "Fibre Basic Plus",
      speed: "100 Mbps",
      data: "4000 GB",
      ott: "No",
      price: "₹599",
      price6m: "",
    },
    {
      name: "Fibre Basic Plus OTT",
      speed: "100 Mbps",
      data: "4000 GB",
      ott: "Zee5, SonyLiv, YuppTV",
      price: "₹699",
      price6m: "₹4194",
    },
    {
      name: "Fibre Tb",
      speed: "150 Mbps",
      data: "4000 GB",
      ott: "No",
      price: "₹799",
      price6m: "₹4794",
    },
    {
      name: "Fibre Value OTT",
      speed: "125 Mbps",
      data: "4000 GB",
      ott: "Disney+, SonyLiv, Zee5, YuppTV",
      price: "₹799",
      price6m: "",
    },
    {
      name: "Fibre Values Plus",
      speed: "150 Mbps",
      data: "5000 GB",
      ott: "No",
      price: "₹849",
      price6m: "",
    },
    {
      name: "SuperStar Premium Plus",
      speed: "200 Mbps",
      data: "5000 GB",
      ott: "Hotstar, LionsGate, SonyLiv, Zee5",
      price: "₹999",
      price6m: "",
    },
    {
      name: "Fibre Premium Plus",
      speed: "225 Mbps",
      data: "6000 GB",
      ott: "No",
      price: "₹1299",
      price6m: "",
    },
    {
      name: "Fibre Premium Plus OTT",
      speed: "250 Mbps",
      data: "6000 GB",
      ott: "Full Suite",
      price: "₹1499",
      price6m: "",
    },
    {
      name: "Fibre Ultra OTT",
      speed: "300 Mbps",
      data: "6500 GB",
      ott: "Full Suite",
      price: "₹1799",
      price6m: "",
    },
  ];

  return (
    <div className="py-12 px-4 md:px-12 bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
        Plans & Pricing
      </h2>
      <h4 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4 text-center px-1">
        Broadband Plans (BSNL FTTH - UP East)
      </h4>
      <div className="max-w-7xl mx-auto bg-white shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[768px] text-center">
            <div className="grid grid-cols-6 bg-blue-900 text-white text-lg font-semibold">
              <div className="px-4 py-4">Plan</div>
              <div className="px-4 py-4">Speed</div>
              <div className="px-4 py-4">Data</div>
              <div className="px-4 py-4">OTT</div>
              <div className="px-4 py-4">Monthly Price</div>
              <div className="px-4 py-4">6M Price</div>
            </div>
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`grid grid-cols-6 text-center items-center px-2 py-5 ${
                  idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-50 transition`}
              >
                <div className="text-gray-800 font-medium">{plan.name}</div>
                <div className="text-gray-700">{plan.speed}</div>
                <div className="text-gray-700">{plan.data}</div>
                <div className="text-gray-700">{plan.ott}</div>
                <div className="text-blue-700 font-semibold">{plan.price}*</div>
                <div className="text-blue-700 font-semibold">
                  {plan.price6m ? `${plan.price6m}*` : "N/A"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
