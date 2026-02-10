"use client"
import React, { useState, useEffect } from 'react'
import { FaPercent, FaFire } from "react-icons/fa"
import { useContext } from 'react'
import { CardContext } from '@/context/CardContext'

export default function DealsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCard } = useContext(CardContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        // Filter products with discount > 10%
        const dealsProducts = data.products.filter((p: any) => p.discountPercentage > 10);
        setProducts(dealsProducts);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8 flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-700">Loading deals...</div>
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8'>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaFire className="text-5xl text-orange-600 animate-pulse" />
            <h1 className="text-5xl font-bold text-black">Hot Deals!</h1>
            <FaFire className="text-5xl text-orange-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-700">Limited time offers - Don't miss out!</p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-orange-100"
            >
              {/* Discount Badge */}
              <div className="absolute top-3 right-3 z-10">
                <div className="bg-orange-600 text-white px-3 py-1 rounded-full font-bold flex items-center gap-1 shadow-lg">
                  <FaPercent className="text-sm" />
                  <span>{Math.round(product.discountPercentage)}% OFF</span>
                </div>
              </div>

              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-b from-gray-200 to-stone-600">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.title}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-orange-600">${product.price}</span>
                  <span className="text-sm text-gray-400 line-through">
                    ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => addToCard(product)}
                  className="w-full bg-gradient-to-r from-orange-600 to-black hover:from-orange-700 hover:to-black text-white font-bold py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-xl"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Deals Message */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-700">No deals available at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}

