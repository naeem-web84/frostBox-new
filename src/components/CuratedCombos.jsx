import React from "react";
import { useNavigate } from "react-router"; 

const comboData = [
  {
    id: 1,
    title: "Warmth & Wellness Combo",
    items: ["Socks", "Skincare", "Tea"],
    image: "https://i.postimg.cc/zBrV3970/Gemini-Generated-Image-au7s3wau7s3wau7s.jpg",
    discount: "Buy 2, Get 10% Off"
  },
  {
    id: 2,
    title: "Street Food Lover’s Delight Set",
    items: ["Street Food Box", "Chutney", "Snack Mix"],
    image: "https://i.postimg.cc/Gm303zvG/Gemini-Generated-Image-idxr6widxr6widxr.jpg",
    discount: "Buy 1, Get 15% Off"
  }
];

const CuratedCombos = () => {
  const navigate = useNavigate(); 

  const handleGiftClick = () => {
    navigate("/gift-address"); 
  };

  return (
    <section className="py-12 bg-gray-100 px-5">
      <h2 className="text-center text-3xl font-semibold mb-8">Curated Combos & Gift Sets</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {comboData.map((combo) => (
          <div key={combo.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={combo.image} alt={combo.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold">{combo.title}</h3>
            <ul className="text-gray-700 mt-2">
              {combo.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-600">{combo.discount}</p>
            <button
              onClick={handleGiftClick} 
              className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full w-full hover:cursor-pointer"
            >
              Gift This
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuratedCombos;
