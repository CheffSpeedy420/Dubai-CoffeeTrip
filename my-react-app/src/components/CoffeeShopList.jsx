import React from "react";
import { HomeIcon, Tag, Map, Menu, Search, SlidersHorizontal, MapPin } from "lucide-react";
import coffee1 from './assets/coffee1.jpg';
import coffee2 from './assets/coffee1.jpg';
import coffee3 from './assets/coffee1.jpg';

export default function CoffeeShopList() {
  const coffeeShops = [
    {
      id: 1,
      name: "Aldenaire Coffee Shop",
      distance: "0.2 km away",
      image: coffee1
    },
    {
      id: 2,
      name: "Brewsome Coffee",
      distance: "0.5 km away",
      image: coffee2
    },
    {
      id: 3,
      name: "Bean & Gone",
      distance: "0.8 km away",
      image: coffee3
    },
    {
      id: 4,
      name: "Bean & Gone",
      distance: "0.8 km away",
      image: coffee3
    }
  ];

  const cardStyle = {
    borderRadius: '10px',
    overflow: 'hidden',
    maxWidth: '350px', // Adjust as needed
    margin: '0 auto',
    paddingBottom: '0.6em',
  };

  const imageStyle = {
    borderRadius: '10px 10px 0 0',
    width: '100%',
    height: '200px', //  Adjust as needed    
    objectFit: 'cover',
    objectPosition: 'center',
    borderBottomLeftRadius: '10px',  //Added
    borderBottomRightRadius: '10px', //Added
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const textContainerStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundImage: 'linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))',
    marginBottom: '0.3em',
    paddingLeft: '1em',
    paddingRight: '1em',
    width: '318px',
    borderBottomLeftRadius: '10px',  //Added
    borderBottomRightRadius: '10px', //Added
  };

    const shopNameStyle = {
        fontWeight: 'bold',
        fontSize: '1.2em',
        color: '#ffffff',
        marginBottom: '0.1em',
    };

    const distanceStyle = {
        fontSize: '0.9em',
        color: '#ffffff',
        marginTop: '0',
    };

  return (
    <div className="bg-black min-h-screen text-white overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <button className="p-2 rounded bg-gray-800">
          <Menu size={30} color="white" />
        </button>
        <div className="flex-1 mx-2">
          <div className="bg-white/20 flex items-center rounded-full px-4 py-2 w-full border border-gray-700">
            <Search size={16} className="text-gray-400 mr-3" />
            <input
              className="bg-transparent text-white w-full outline-none placeholder-gray-400"
              placeholder="Search coffee shops"
            />
          </div>
        </div>
        <button className="p-2 rounded bg-gray-800">
          <Map size={30} color="white" />
        </button>
      </div>

      {/* Sort button */}
      <div className="px-4 pb-2 mt-2 sort-bar">
        <button className="flex items-center space-x-2 text-black bg-white px-3 py-1 rounded sort">
          <SlidersHorizontal size={16} />
          <span className="ml-1">Sort</span>
        </button>
      </div>

      {/* Cards */}
      <div className="px-4 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffeeShops.map((shop) => (
          <div key={shop.id} style={cardStyle}>
            <div className="relative">
              <img
                src={shop.image}
                alt={shop.name}
                style={imageStyle}
              />
              <div style={textContainerStyle}>
                <p style={shopNameStyle}>{shop.name}</p>
                <p style={distanceStyle} className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {shop.distance}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-black border-t border-gray-700 py-2 z-50 bottom-bar">
        <div className="flex flex-col items-center">
          <button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
            <HomeIcon size={20} color="white" />
          </button>
          <p className="text-xs mt-1 text-white">Home</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
            <Tag size={20} color="white" />
          </button>
          <p className="text-xs mt-1 text-white">Label</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
            <Tag size={20} color="white" />
          </button>
          <p className="text-xs mt-1 text-white">Label</p>
        </div>
      </div>
    </div>
  );
}

