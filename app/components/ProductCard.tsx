"use client"
import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import { getData } from "../lib/api"
import { CardContext } from '@/context/CardContext';


import { IoMdHeartEmpty } from "react-icons/io";

export default function ProductCard({ searchTerm, category }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCard } = useContext(CardContext);

    useEffect(() => {
        setLoading(true);
        getData()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const filteredProducts = products.filter(product =>
        (category === "All" || product.category === category) &&
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="text-2xl font-bold text-gray-600">Loading products...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="text-2xl font-bold text-red-600">Error: {error}</div>
            </div>
        );
    }

    if (filteredProducts.length === 0) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="text-2xl font-bold text-gray-600">No products found</div>
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {filteredProducts.map((product) => (
                <div key={product.id} className='group relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
                    {/* Wishlist Icon */}
                    <div className='absolute top-3 right-3 z-10'>
                        <button className='bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-md'>
                            <IoMdHeartEmpty className='text-2xl' />
                        </button>
                    </div>

                    {/* Product Image */}
                    <div className='relative h-64 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden'>
                        <img
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                            src={product.images[0]}
                            alt={product.title}
                        />
                    </div>

                    {/* Product Info */}
                    <div className='p-6 flex flex-col flex-grow'>
                        <h2 className='text-lg font-bold text-gray-800 mb-3 line-clamp-2 min-h-[3.5rem]'>
                            {product.title}
                        </h2>

                        <div className='mt-auto'>
                            <div className='flex items-center justify-between mb-4'>
                                <span className='text-2xl font-bold text-orange-600'>
                                    ${product.price}
                                </span>
                                {product.discountPercentage > 0 && (
                                    <span className='bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm font-semibold'>
                                        -{Math.round(product.discountPercentage)}%
                                    </span>
                                )}
                            </div>

                            <button
                                onClick={() => addToCard(product)}
                                className='w-full bg-gradient-to-r from-orange-600 to-black hover:from-orange-700 hover:to-black text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-xl'
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
