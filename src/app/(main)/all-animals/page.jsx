"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RingLoader } from "react-spinners"; 
import animals from "@/lib/data.json";

const AllAnimalsPage = () => {
  const [sortBy, setSortBy] = useState("default");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const sortedAnimals = [...animals].sort((a, b) => {
    if (sortBy === "low-to-high") return a.price - b.price;
    if (sortBy === "high-to-low") return b.price - a.price;
    return 0;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f0f9f6] flex flex-col items-center justify-center">
        <RingLoader 
          color="#064e3b" 
          size={80} 
          speedMultiplier={1.2}
        />
        <div className="mt-8 text-center">
          <p className="text-[#2d4a3e] font-bold uppercase tracking-[0.4em] text-[10px] animate-pulse">
            Qurbani Hat
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#f0f9f6] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-3xl font-bold text-[#2d4a3e] uppercase tracking-wide">
            All Animals
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm font-medium">
                Sort by:
              </span>
              <select
                className="bg-white border border-emerald-100 rounded-lg px-4 py-2 text-sm text-[#4b635a] outline-none focus:ring-2 focus:ring-[#fbbf24] transition-all cursor-pointer shadow-sm"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedAnimals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-50 group flex flex-col h-full"
            >
              <div className="relative h-56 w-full shrink-0">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <p className="text-[#fbbf24] font-bold text-sm">
                    {animal.price.toLocaleString()} ৳
                  </p>
                </div>
              </div>
              <div className="p-5 flex flex-col grow">
                <h4 className="font-bold text-[#2d4a3e] text-xl mb-1 truncate">
                  {animal.name}
                </h4>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <p className="text-sm text-gray-500 font-medium italic">
                    {animal.breed}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  <Link
                    href={`/animal/${animal.id}`}
                    className="block w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-[#064e3b] text-center py-3 rounded-xl font-bold text-sm uppercase transition-colors shadow-sm active:scale-[0.98]"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedAnimals.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 font-medium">No animals found in our inventory.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default AllAnimalsPage;