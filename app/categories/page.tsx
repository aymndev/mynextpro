"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BiCategory } from "react-icons/bi"

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 p-8 flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-700">Loading categories...</div>
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 p-8'>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Product Categories</h1>
          <p className="text-gray-700">Browse products by category</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category: any, index: number) => (
            <Link
              key={index}
              href={`/shop?category=${category.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-orange-100 hover:border-orange-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <BiCategory className="text-white text-3xl" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-center text-gray-800 capitalize group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h3>

                <p className="text-center text-gray-500 mt-2 text-sm">
                  View all products
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* All Products Link */}
        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-block bg-gradient-to-r from-orange-600 to-black hover:from-orange-700 hover:to-black text-white px-8 py-4 font-bold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  )
}

