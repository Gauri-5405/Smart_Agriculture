import React from "react";
import { Wheat, Leaf, Zap, Sun, CloudRain, Cloud } from "lucide-react";

export default function SmartInsightsSection() {
  const insightsData = [
    {
      crop: "Wheat",
      cropIcon: <Wheat size={24} className="text-yellow-600" />,
      priceDirection: "Rising",
      weather: "32°C, Light Rain",
      weatherIcon: <CloudRain size={24} className="text-blue-600" />,
      advice: "Good time to sell, irrigation may be needed",
    },
    {
      crop: "Rice",
      cropIcon: <Leaf size={24} className="text-green-600" />,
      priceDirection: "Falling",
      weather: "28°C, Sunny",
      weatherIcon: <Sun size={24} className="text-yellow-500" />,
      advice: "Hold for now, harvest can proceed",
    },
    {
      crop: "Onion",
      cropIcon: <Zap size={24} className="text-red-600" />,
      priceDirection: "Rising",
      weather: "25°C, Cloudy",
      weatherIcon: <Cloud size={24} className="text-gray-500" />,
      advice: "Expect higher prices tomorrow, monitor soil moisture",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-bold mb-4">Smart Insights</h2>
      {insightsData.map((insight, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg bg-green-50 flex justify-between items-center"
        >
          <div className="flex items-center gap-4">
            {/* Crop info */}
            {insight.cropIcon}
            <div>
              <p className="font-semibold">{insight.crop}</p>
              <p className="text-sm text-gray-600">{insight.advice}</p>
            </div>
          </div>
          {/* Price & Weather info */}
          <div className="text-right">
            <p
              className={`font-bold ${
                insight.priceDirection === "Rising" ? "text-green-600" : "text-red-600"
              }`}
            >
              {insight.priceDirection}
            </p>
            <div className="flex items-center justify-end gap-1">
              {insight.weatherIcon}
              <span className="text-sm text-gray-700">{insight.weather}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
