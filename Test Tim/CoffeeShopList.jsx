import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function CoffeeShopList() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="w-8 h-8 bg-white rounded" /> {/* Burger menu placeholder */}
        <Input
          className="bg-white text-black rounded px-2 py-1 w-2/3"
          placeholder="Search"
        />
        <div className="w-8 h-8 bg-white rounded" /> {/* Map icon placeholder */}
      </div>

      {/* Sort button */}
      <div className="px-4 pb-2">
        <Button className="flex items-center space-x-1 text-black bg-white">
          <SlidersHorizontal size={16} />
          <span>Sort</span>
        </Button>
      </div>

      {/* Cards */}
      <div className="space-y-4 px-4">
        {[1, 2, 3].map((index) => (
          <Card key={index} className="bg-transparent border-none p-0">
            <div className="relative">
              <img
                src="/coffee-shop.jpg" // replace with actual image path
                alt="Aldenaire Coffee Shop"
                className="rounded w-full"
              />
              <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black w-full rounded-b">
                <p className="font-semibold text-lg">Name of shop</p>
                <p className="text-sm text-gray-300 flex items-center">
                  <MapPin size={14} className="mr-1" /> 0.2 km away
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-black border-t border-gray-700 py-2">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-white rounded-full" /> {/* Home icon placeholder */}
          <p className="text-xs">Home</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-white rounded-full" /> {/* Label icon placeholder */}
          <p className="text-xs">Label</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-white rounded-full" /> {/* Label icon placeholder */}
          <p className="text-xs">Label</p>
        </div>
      </div>
    </div>
  );
}
