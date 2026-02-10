"use client"
import { MenuContext } from "@/context/MenuContext";

import { getData } from "./lib/api";

import { useContext, useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import DrawerBaskit from "./components/DrawerBaskit";
import ProductCard from "./components/ProductCard";
import CategoryDropDd from "./components/CategoryDropDd";



export default function Home() {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("All");
  const { open } = useContext(MenuContext);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className={`w-full min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-gray-100 transition-all duration-500 ${open ? "pl-8" : "pl-4"} pr-8 py-8`}>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-black bg-clip-text text-transparent mb-3">
            Welcome to Our Store
          </h1>
          <p className="text-xl text-gray-700">Discover amazing products at unbeatable prices</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 backdrop-blur-sm bg-opacity-90 border-2 border-orange-200">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <CategoryDropDd onCategoryChange={handleCategoryChange} />

            <div className="flex-1 min-w-[300px] max-w-[500px]">
              <input
                value={input}
                type="text"
                onChange={(e) => setInput(e.target.value)}
                className="w-full focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg text-black bg-gray-100 px-4 py-3 border border-gray-300 transition-all"
                placeholder="Search for amazing products..."
              />
            </div>

            <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-black text-white px-6 py-3 font-bold rounded-lg transition-all shadow-lg hover:shadow-xl">
              Search
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-90 border-2 border-orange-200">
          <h2 className="text-3xl font-bold text-black mb-6">Featured Products</h2>
          <ProductCard searchTerm={input} category={category} />
        </div>
      </div>










    </div>
  );
}
