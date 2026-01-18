import React from "react";
import { Wheat, Leaf, Zap } from "lucide-react"; // Zap used instead of Onion

export default function PricePredictionSection() {
  const predictions = [
    { crop: "Wheat", icon: <Wheat size={24} className="text-yellow-600" />, direction: "Rising", advice: "Good time to sell" },
    { crop: "Rice", icon: <Leaf size={24} className="text-green-600" />, direction: "Falling", advice: "Hold for now" },
    { crop: "Onion", icon: <Zap size={24} className="text-red-600" />, direction: "Rising", advice: "Expect higher prices tomorrow" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-bold mb-2">Crop Price Prediction</h2>
      {predictions.map((p, index) => (
        <div
          key={index}
          className="p-3 border rounded-lg bg-green-50 flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            {p.icon}
            <div>
              <p className="font-semibold">{p.crop}</p>
              <p className="text-sm text-gray-600">{p.advice}</p>
            </div>
          </div>
          <p
            className={`font-bold ${p.direction === "Rising" ? "text-green-600" : "text-red-600"}`}
          >
            {p.direction}
          </p>
        </div>
      ))}
    </div>
  );
}
