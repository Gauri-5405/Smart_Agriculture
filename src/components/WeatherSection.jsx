import React from "react";
import { Sun, CloudRain, CloudSnow, Cloud } from "lucide-react";

export default function WeatherSection() {
  // Sample weather data
  const weatherData = [
    {
      location: "Farm Field 1",
      temperature: "32°C",
      rainfall: "Light Rain",
      icon: <CloudRain size={28} className="text-blue-600" />,
      advice: "Carry irrigation if needed",
    },
    {
      location: "Farm Field 2",
      temperature: "28°C",
      rainfall: "Sunny",
      icon: <Sun size={28} className="text-yellow-500" />,
      advice: "Perfect weather for harvesting",
    },
    {
      location: "Farm Field 3",
      temperature: "25°C",
      rainfall: "Cloudy",
      icon: <Cloud size={28} className="text-gray-500" />,
      advice: "Monitor soil moisture",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-bold mb-2">Weather & Forecast</h2>
      {weatherData.map((w, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg bg-green-50 flex justify-between items-center"
        >
          <div className="flex items-center gap-4">
            {w.icon} {/* Weather icon */}
            <div>
              <p className="font-semibold">{w.location}</p>
              <p className="text-sm text-gray-600">{w.advice}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold">{w.temperature}</p>
            <p className="text-sm text-blue-700">{w.rainfall}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
