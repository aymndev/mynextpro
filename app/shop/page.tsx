"use client"
import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import CategoryDropDd from '../components/CategoryDropDd'
import { FaShoppingBasket } from "react-icons/fa"
import Dropdown from '../components/Dropdown'

export default function ShopPage() {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 p-8'>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Our Shop</h1>
          <p className="text-gray-700">Discover amazing products at great prices</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-2 border-orange-200">
          <div className="flex flex-wrap gap-4 items-center">
            <CategoryDropDd onCategoryChange={handleCategoryChange} />

            <div className="flex-1 min-w-[300px]">
              <input
                value={input}
                type="text"
                onChange={(e) => setInput(e.target.value)}
                className="w-full focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-l-lg text-black bg-gray-100 px-4 py-3 border border-gray-300"
                placeholder="Search for products..."
              />
            </div>

            <button className="bg-gradient-to-r from-orange-600 to-black hover:from-orange-700 hover:to-black text-white px-6 py-3 font-bold rounded-lg transition-all shadow-md hover:shadow-xl">
              Search
            </button>

            <Dropdown buttonText={<FaShoppingBasket size={24} />}/>
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-orange-200">
          <ProductCard searchTerm={input} category={category} />
        </div>
      </div>
    </div>
  )
}

