import React, { useState } from "react";
import { MapPin, Navigation, Store } from "lucide-react";

export default function LocationSection() {
  const [location, setLocation] = useState("Not detected");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [mandi, setMandi] = useState("—");

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        setLocation("Pune, Maharashtra");
        setMandi("Pune Market Yard");
      },
      () => setLocation("Permission denied")
    );
  };

  const applyManual = () => {
    if (state && city) {
      setLocation(`${city}, ${state}`);
      setMandi(`${city} Main Mandi`);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4">
      <h2 className="text-lg font-semibold text-green-700 flex items-center gap-2">
        <MapPin /> Location
      </h2>

      {/* AUTO LOCATION */}
      <div className="bg-green-50 p-3 rounded-lg flex flex-col sm:flex-row sm:justify-between gap-3">
        <div>
          <p className="text-sm text-gray-600">Auto-detected location</p>
          <p className="font-medium">{location}</p>
        </div>
        <button
          onClick={detectLocation}
          className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-1 text-sm"
        >
          <Navigation size={16} /> Detect
        </button>
      </div>

      {/* MANUAL LOCATION */}
      <div className="bg-green-50 p-3 rounded-lg space-y-3">
        <p className="text-sm text-gray-600">Manual location selection</p>

        <div className="flex flex-col sm:flex-row gap-2">
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border px-2 py-2 rounded w-full"
          >
            <option value="">Select State</option>
            <option>Maharashtra</option>
            <option>Gujarat</option>
            <option>Madhya Pradesh</option>
          </select>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border px-2 py-2 rounded w-full"
          >
            <option value="">Select City</option>
            <option>Pune</option>
            <option>Nashik</option>
            <option>Nagpur</option>
          </select>

          <button
            onClick={applyManual}
            className="bg-green-600 text-white px-4 py-2 rounded text-sm"
          >
            Apply
          </button>
        </div>
      </div>

      {/* NEAREST MANDI */}
      <div className="bg-green-50 p-3 rounded-lg flex items-center gap-3">
        <Store className="text-green-700" />
        <div>
          <p className="text-sm text-gray-600">Nearest Mandi</p>
          <p className="font-medium">{mandi}</p>
        </div>
      </div>
    </div>
  );
}
