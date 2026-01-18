import React from "react";
import {
  Wheat,
  Leaf,
  Carrot,
  Apple,
  Sprout,
  Store,
  IndianRupee,
  Banana,
  Grape,
  Citrus,
} from "lucide-react";

const crops = [
  // 🌾 CEREALS & CROPS
  { name: "Wheat", icon: Wheat, mandi: 2280, jd: 2350, bg: "bg-green-50" },
  { name: "Rice", icon: Sprout, mandi: 2100, jd: 2180, bg: "bg-blue-50" },
  { name: "Maize", icon: Leaf, mandi: 1850, jd: 1920, bg: "bg-lime-50" },
  { name: "Soybean", icon: Sprout, mandi: 4200, jd: 4350, bg: "bg-emerald-50" },

  // 🥕 VEGETABLES
  { name: "Onion", icon: Leaf, mandi: 1800, jd: 1900, bg: "bg-purple-50" },
  { name: "Potato", icon: Carrot, mandi: 1600, jd: 1680, bg: "bg-yellow-50" },
  { name: "Tomato", icon: Apple, mandi: 1400, jd: 1500, bg: "bg-red-50" },
  { name: "Green Peas", icon: Leaf, mandi: 3200, jd: 3350, bg: "bg-teal-50" },

  // 🍎 FRUITS
  { name: "Apple", icon: Apple, mandi: 8500, jd: 8800, bg: "bg-pink-50" },
  { name: "Banana", icon: Banana, mandi: 1200, jd: 1300, bg: "bg-amber-50" },
  { name: "Grapes", icon: Grape, mandi: 5200, jd: 5450, bg: "bg-violet-50" },
  { name: "Orange", icon: Citrus, mandi: 3800, jd: 4000, bg: "bg-orange-50" },
];

export default function TodayPriceSection() {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4 w-full">
      {/* HEADER */}
      <h2 className="text-lg font-semibold text-green-700 flex items-center gap-2">
        <Store /> Today’s Crop Price
      </h2>

      {/* CROP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {crops.map((crop, index) => {
          const Icon = crop.icon;
          return (
            <div
              key={index}
              className={`${crop.bg} rounded-xl p-4 shadow-sm flex flex-col gap-3`}
            >
              {/* Crop Name */}
              <div className="flex items-center gap-2">
                <Icon className="text-green-700" size={24} />
                <h3 className="font-semibold text-gray-800">{crop.name}</h3>
              </div>

              {/* Prices */}
              <div className="flex justify-between gap-3">
                {/* Mandi Price */}
                <div className="bg-white rounded-lg p-2 flex-1 flex items-center gap-2">
                  <Store className="text-green-600" size={18} />
                  <div>
                    <p className="text-xs text-gray-500">Mandi Price</p>
                    <p className="font-bold flex items-center gap-1 text-sm">
                      <IndianRupee size={14} />
                      {crop.mandi}
                    </p>
                  </div>
                </div>

                {/* JD Solution Price */}
                <div className="bg-white rounded-lg p-2 flex-1 flex items-center gap-2">
                  <IndianRupee className="text-blue-600" size={18} />
                  <div>
                    <p className="text-xs text-gray-500">JD Solution</p>
                    <p className="font-bold flex items-center gap-1 text-sm">
                      <IndianRupee size={14} />
                      {crop.jd}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
