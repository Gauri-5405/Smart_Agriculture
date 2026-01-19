import React, { useState } from "react";
import {
  Truck,
  Clock,
  Package,
  CheckCircle,
  Phone,
  Search,
} from "lucide-react";

/* ---------------- LANGUAGE TEXT ---------------- */
const TEXT = {
  en: {
    title: "Pickup Status",
    subtitle: "Track your sell requests",
    requestNo: "Request Number",
    placeholder: "Enter Request Number",
    track: "Track Pickup",
    active: "Active Request",
    inProgress: "In Progress",
    requestSent: "Request Sent",
    pickupAssigned: "Pickup Assigned",
    outForPickup: "Out for Pickup",
    completed: "Completed",
    assignedTo: "Assigned to",
    expected: "Expected",
    call: "Call Support",
    notFound: "No request found for this number",
  },
  hi: {
    title: "पिकअप स्थिति",
    subtitle: "अपनी बिक्री अनुरोध ट्रैक करें",
    requestNo: "अनुरोध संख्या",
    placeholder: "अनुरोध संख्या दर्ज करें",
    track: "पिकअप ट्रैक करें",
    active: "सक्रिय अनुरोध",
    inProgress: "प्रक्रिया में",
    requestSent: "अनुरोध भेजा गया",
    pickupAssigned: "पिकअप सौंपा गया",
    outForPickup: "पिकअप के लिए निकला",
    completed: "पूरा हुआ",
    assignedTo: "सौंपा गया",
    expected: "अपेक्षित",
    call: "सपोर्ट कॉल करें",
    notFound: "इस संख्या के लिए कोई अनुरोध नहीं मिला",
  },
  mr: {
    title: "पिकअप स्थिती",
    subtitle: "तुमच्या विक्री विनंत्या ट्रॅक करा",
    requestNo: "विनंती क्रमांक",
    placeholder: "विनंती क्रमांक टाका",
    track: "पिकअप ट्रॅक करा",
    active: "सक्रिय विनंती",
    inProgress: "प्रगतीत",
    requestSent: "विनंती पाठवली",
    pickupAssigned: "पिकअप नियुक्त",
    outForPickup: "पिकअपसाठी निघाले",
    completed: "पूर्ण",
    assignedTo: "नियुक्त",
    expected: "अपेक्षित",
    call: "सपोर्ट कॉल करा",
    notFound: "या क्रमांकासाठी विनंती आढळली नाही",
  },
};

export default function PickupStatusSection({ lang = "en" }) {
  const t = TEXT[lang];
  const [requestNo, setRequestNo] = useState("");
  const [found, setFound] = useState(true);

  // Dummy data (can be replaced with API)
  const data = {
    crop: "Wheat",
    quantity: "50 Quintal",
    status: t.inProgress,
    team: "Pickup Team A",
    expected: "17 Jan, 07:30 PM",
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 md:p-6 max-w-3xl mx-auto">
      {/* HEADER */}
      <h2 className="text-xl font-bold mb-1">{t.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{t.subtitle}</p>

      {/* SEARCH */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <div className="flex items-center border rounded px-3 py-2 flex-1">
          <Search size={16} className="text-gray-400 mr-2" />
          <input
            value={requestNo}
            onChange={(e) => setRequestNo(e.target.value)}
            placeholder={t.placeholder}
            className="outline-none w-full"
          />
        </div>
        <button
          onClick={() => setFound(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {t.track}
        </button>
      </div>

      {!found && (
        <p className="text-red-500 text-sm">{t.notFound}</p>
      )}

      {/* STATUS CARD */}
      {found && (
        <div className="border rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-semibold">{data.crop}</p>
              <p className="text-sm text-gray-500">{data.quantity}</p>
            </div>
            <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
              {data.status}
            </span>
          </div>

          {/* TIMELINE */}
          <div className="space-y-4">
            <TimelineItem icon={<Clock />} text={t.requestSent} active />
            <TimelineItem
              icon={<Package />}
              text={`${t.pickupAssigned} • ${t.assignedTo}: ${data.team}`}
              sub={`${t.expected}: ${data.expected}`}
              active
            />
            <TimelineItem icon={<Truck />} text={t.outForPickup} />
            <TimelineItem icon={<CheckCircle />} text={t.completed} />
          </div>

          {/* SUPPORT */}
          <button className="mt-6 w-full bg-green-700 text-white py-2 rounded flex items-center justify-center gap-2">
            <Phone size={16} /> {t.call}
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------------- TIMELINE ITEM ---------------- */
function TimelineItem({ icon, text, sub, active }) {
  return (
    <div className="flex gap-3 items-start">
      <div
        className={`h-9 w-9 rounded-full flex items-center justify-center ${
          active ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"
        }`}
      >
        {icon}
      </div>
      <div>
        <p className="font-medium">{text}</p>
        {sub && <p className="text-sm text-gray-500">{sub}</p>}
      </div>
    </div>
  );
}
