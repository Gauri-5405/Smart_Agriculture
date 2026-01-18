import React, { useState } from "react";
import LocationSection from "../components/LocationSection";
import TodayPriceSection from "../components/TodayPriceSection";
import PricePredictionSection from "../components/PricePredictionSection";
import WeatherSection from "../components/WeatherSection";
import SmartInsightsSection from "../components/SmartInsightsSection";

import {
  ShoppingCart,
  Truck,
  User,
  HelpCircle,
  MapPin,
  TrendingUp,
  CloudRain,
  Lightbulb,
  Wheat,
} from "lucide-react";
import logo from "../assets/logo.jpg";

const TEXT = {
  en: {
    title: "Smart Agriculture",
    sell: "Sell Crop",
    track: "Track Order",
    profile: "Profile",
    support: "Support",
    location: "Location",
    todayPrice: "Today’s Crop Price",
    prediction: "Price Prediction",
    weather: "Weather & Forecast",
    insights: "Smart Insights",
    cards: {
      today: "Today’s Price",
      future: "Future Price",
      weather: "Weather",
      pickup: "Pickup Status",
    },
  },
  hi: {
    title: "स्मार्ट कृषि",
    sell: "फसल बेचें",
    track: "ऑर्डर ट्रैक करें",
    profile: "प्रोफ़ाइल",
    support: "सहायता",
    location: "स्थान",
    todayPrice: "आज का फसल मूल्य",
    prediction: "मूल्य पूर्वानुमान",
    weather: "मौसम पूर्वानुमान",
    insights: "स्मार्ट जानकारी",
    cards: {
      today: "आज का मूल्य",
      future: "भविष्य का मूल्य",
      weather: "मौसम",
      pickup: "पिकअप स्थिति",
    },
  },
  mr: {
    title: "स्मार्ट शेती",
    sell: "पीक विक्री",
    track: "ऑर्डर ट्रॅक",
    profile: "प्रोफाइल",
    support: "मदत",
    location: "स्थान",
    todayPrice: "आजचा पिकाचा दर",
    prediction: "दर अंदाज",
    weather: "हवामान अंदाज",
    insights: "स्मार्ट माहिती",
    cards: {
      today: "आजचा दर",
      future: "भविष्यातील दर",
      weather: "हवामान",
      pickup: "पिकअप स्थिती",
    },
  },
};

export default function Dashboard() {
  const [lang, setLang] = useState("en");
  const [activeSection, setActiveSection] = useState("dashboard");
  const t = TEXT[lang];

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* NAVBAR */}
      <header className="bg-white shadow px-4 py-3 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-8 w-8" />
          <h1 className="font-bold text-green-700">{t.title}</h1>
        </div>

        <div className="flex items-center gap-4">
          <NavItem icon={<ShoppingCart size={18} />} label={t.sell} />
          <NavItem icon={<Truck size={18} />} label={t.track} />
          <NavItem icon={<User size={18} />} label={t.profile} />
          <NavItem icon={<HelpCircle size={18} />} label={t.support} />

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="mr">मराठी</option>
          </select>
        </div>
      </header>

      {/* BODY */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="bg-white shadow w-full lg:w-72 p-3 overflow-x-auto">
          <div className="flex lg:flex-col gap-2">
            <SectionItem
              icon={<MapPin size={18} />}
              title={t.location}
              active={activeSection === "location"}
              onClick={() => setActiveSection("location")}
            />
            <SectionItem
              icon={<Wheat size={18} />}
              title={t.todayPrice}
              active={activeSection === "todayPrice"}
              onClick={() => setActiveSection("todayPrice")}
            />
            <SectionItem
              icon={<TrendingUp size={18} />}
              title={t.prediction}
              active={activeSection === "pricePrediction"}
              onClick={() => setActiveSection("pricePrediction")}
            />
            <SectionItem
              icon={<CloudRain size={18} />}
              title={t.weather}
              active={activeSection === "weather"}
              onClick={() => setActiveSection("weather")}
            />
            <SectionItem
              icon={<Lightbulb size={18} />}
              title={t.insights}
              active={activeSection === "insights"}
              onClick={() => setActiveSection("insights")}
            />
          </div>
        </aside>

        {/* CENTER CONTENT */}
        <main className="flex-1 overflow-y-auto p-4">
          {activeSection === "location" && <LocationSection />}
          {activeSection === "todayPrice" && <TodayPriceSection />}
          {activeSection === "pricePrediction" && <PricePredictionSection />}
          {activeSection === "weather" && <WeatherSection />}
          {activeSection === "insights" && <SmartInsightsSection />}

          {activeSection === "dashboard" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <SmallCard
                icon={<Wheat className="text-green-600" size={24} />}
                title={t.cards.today}
                value="Wheat ₹2,280"
                sub="Rice ₹2,100"
              />
              <SmallCard
                icon={<TrendingUp className="text-blue-600" size={24} />}
                title={t.cards.future}
                value="Wheat Rising"
                sub="Onion Falling"
              />
              <SmallCard
                icon={<CloudRain className="text-indigo-600" size={24} />}
                title={t.cards.weather}
                value="32°C"
                sub="Rain in 2 days"
              />
              <SmallCard
                icon={<Truck className="text-orange-600" size={24} />}
                title={t.cards.pickup}
                value="2 Completed"
                sub="1 Scheduled"
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// ------------------- Helper Components -------------------
function NavItem({ icon, label }) {
  return (
    <button className="flex items-center gap-1 text-sm hover:text-green-600">
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function SectionItem({ icon, title, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer whitespace-nowrap ${
        active ? "bg-green-200 font-semibold" : "bg-green-50 hover:bg-green-100"
      }`}
    >
      {icon}
      <span className="text-sm">{title}</span>
    </div>
  );
}

function SmallCard({ icon, title, value, sub }) {
  return (
    <div className="bg-white rounded-xl shadow h-44 flex flex-col justify-center items-center gap-2 text-center">
      {icon}
      <h3 className="font-semibold">{title}</h3>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-sm text-gray-500">{sub}</p>
    </div>
  );
}
