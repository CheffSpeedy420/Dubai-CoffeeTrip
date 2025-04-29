import React from "react";
import { HomeIcon, Tag, Map, Menu, Search, SlidersHorizontal, MapPin } from "lucide-react";

export default function CoffeeShopList() {
  const coffeeShops = [
    {
      id: 1,
      name: "Aldenaire Coffee Shop",
      distance: "0.2 km away",
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      name: "Brewsome Coffee",
      distance: "0.5 km away",
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      name: "Bean & Gone",
      distance: "0.8 km away",
      image: "/api/placeholder/400/200"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <button className="p-2 rounded bg-gray-800">
          <Menu size={20} color="white" />
        </button>
        <div className="flex-1 mx-2">
          <div className="bg-gray-800 flex items-center rounded px-3 py-1">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              className="bg-transparent text-white w-full outline-none placeholder-gray-400"
              placeholder="Search coffee shops"
            />
          </div>
        </div>
        <button className="p-2 rounded bg-gray-800">
          <Map size={20} color="white" />
        </button>
      </div>

      {/* Sort button */}
      <div className="px-4 pb-2">
        <button className="flex items-center space-x-1 text-black bg-white px-3 py-1 rounded">
          <SlidersHorizontal size={16} />
          <span className="ml-1">Sort</span>
        </button>
      </div>

      {/* Cards */}
      <div className="space-y-4 px-4 mb-16">
        {coffeeShops.map((shop) => (
          <div key={shop.id} className="overflow-hidden rounded">
            <div className="relative">
              <img
                src={shop.image}
                alt={shop.name}
                className="rounded w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black to-transparent w-full">
                <p className="font-semibold text-lg">{shop.name}</p>
                <p className="text-sm text-gray-300 flex items-center">
                  <MapPin size={14} className="mr-1" /> {shop.distance}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-black border-t border-gray-700 py-2">
        <div className="flex flex-col items-center">
          <button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
            <HomeIcon size={20} color="white" />
          </button>
          <p className="text-xs mt-1">Home</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
            <Tag size={20} color="white" />
          </button>
          <p className="text-xs mt-1">Favorites</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
            <MapPin size={20} color="white" />
          </button>
          <p className="text-xs mt-1">Nearby</p>
        </div>
      </div>
    </div>
  );
}