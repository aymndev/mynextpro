"use client";

import React from "react";
import { FaStore, FaShippingFast, FaAward, FaUsers } from "react-icons/fa";

export default function AboutUsPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-black mb-4">About Our Store</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        We're passionate about bringing you the best products at amazing prices.
                        Your satisfaction is our top priority.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all border-2 border-orange-100">
                        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaStore className="text-3xl text-orange-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Quality Products</h3>
                        <p className="text-gray-600 text-sm">Carefully curated selection of premium items</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all border-2 border-orange-100">
                        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaShippingFast className="text-3xl text-orange-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Fast Shipping</h3>
                        <p className="text-gray-600 text-sm">Quick delivery to your doorstep</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all border-2 border-orange-100">
                        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaAward className="text-3xl text-orange-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Best Prices</h3>
                        <p className="text-gray-600 text-sm">Competitive pricing and great deals</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all border-2 border-orange-100">
                        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaUsers className="text-3xl text-orange-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Customer Support</h3>
                        <p className="text-gray-600 text-sm">24/7 support for all your needs</p>
                    </div>
                </div>

                {/* Story Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-2 border-orange-200">
                    <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Founded with a vision to revolutionize online shopping, our store has grown from a small
                            startup to a trusted destination for thousands of customers worldwide.
                        </p>
                        <p>
                            We believe in providing not just products, but experiences. Every item in our catalog is
                            carefully selected to meet our high standards of quality and value.
                        </p>
                        <p>
                            Our team works tirelessly to ensure that your shopping experience is smooth, enjoyable,
                            and rewarding. From browsing to checkout, we've designed every step with you in mind.
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="bg-gradient-to-r from-orange-600 to-black rounded-xl shadow-lg p-8 text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        To provide exceptional products and outstanding service that exceeds customer expectations,
                        while building lasting relationships based on trust and satisfaction.
                    </p>
                </div>
            </div>
        </div>
    );
}
