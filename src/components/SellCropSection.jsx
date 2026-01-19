import React, { useState } from "react";
import {
  ShoppingCart,
  ImagePlus,
  FileText,
  Wheat,
  Leaf,
  Sprout,
  Droplet,
  Factory,
  Landmark,
} from "lucide-react";

export default function SellCropSection({ lang, onClose }) {
  const TEXT = {
    en: {
      title: "Sell Crop to JD Solution",
      crop: "Select Crop",
      quantity: "Quantity (Quintals)",
      notes: "Additional Notes (Optional)",
      photo: "Upload Crop Photo (Optional)",
      submit: "Submit Request",
    },
    hi: {
      title: "JD Solution को फसल बेचें",
      crop: "फसल चुनें",
      quantity: "मात्रा (क्विंटल)",
      notes: "अतिरिक्त जानकारी (वैकल्पिक)",
      photo: "फसल की फोटो अपलोड करें (वैकल्पिक)",
      submit: "अनुरोध भेजें",
    },
    mr: {
      title: "JD Solution ला पीक विक्री",
      crop: "पीक निवडा",
      quantity: "प्रमाण (क्विंटल)",
      notes: "अतिरिक्त माहिती (ऐच्छिक)",
      photo: "पीक फोटो अपलोड करा (ऐच्छिक)",
      submit: "विनंती पाठवा",
    },
  };

  const t = TEXT[lang];

  const [crop, setCrop] = useState("");
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");
  const [photo, setPhoto] = useState(null);

  /* ---- CROPS WITH ICONS ---- */
  const crops = [
    { name: "Wheat", icon: <Wheat size={40} /> },
    { name: "Rice", icon: <Leaf size={40} /> },
    { name: "Onion", icon: <Sprout size={40} /> },
    { name: "Soybean", icon: <Landmark size={40} /> },
    { name: "Cotton", icon: <Droplet size={40} /> },
    { name: "Maize", icon: <Factory size={40} /> },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!crop || !quantity) {
      alert("Please select crop and quantity");
      return;
    }

    alert("Sell crop request submitted successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-3">
      <div className="bg-white w-full max-w-lg rounded-xl p-5 overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <ShoppingCart className="text-green-600" />
          {t.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ---- Crop Selection ---- */}
          <div>
            <label className="font-medium block mb-2">{t.crop}</label>
            <div className="grid grid-cols-2 gap-3">
              {crops.map((c) => (
                <div
                  key={c.name}
                  onClick={() => setCrop(c.name)}
                  className={`border rounded-lg p-3 text-center cursor-pointer flex flex-col items-center gap-2
                    ${
                      crop === c.name
                        ? "border-green-600 bg-green-50"
                        : "hover:bg-gray-50"
                    }`}
                >
                  <div className="text-green-700">{c.icon}</div>
                  <p className="text-sm font-medium">{c.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ---- Quantity ---- */}
          <div>
            <label className="font-medium block mb-1">{t.quantity}</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="e.g. 10"
            />
          </div>

          {/* ---- Notes (Optional) ---- */}
          <div>
            <label className="font-medium block mb-1 flex items-center gap-1">
              <FileText size={16} /> {t.notes}
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border rounded px-3 py-2"
              rows="3"
            />
          </div>

          {/* ---- Photo Upload (Optional) ---- */}
          <div>
            <label className="font-medium block mb-1 flex items-center gap-1">
              <ImagePlus size={16} /> {t.photo}
            </label>
            <input
              type="file"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>

          {/* ---- Buttons ---- */}
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              {t.submit}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
