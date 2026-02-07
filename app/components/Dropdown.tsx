"use client";

import { useState, useContext } from "react";
import { CardContext } from "@/context/CardContext";

export default function Dropdown({ buttonText, children }) {
    const [open, setOpen] = useState(false);
    const { card } = useContext(CardContext);

    return (
        <>
            {/* Button */}
            <button
                onClick={() => setOpen(true)}
                className="px-5 py-3 text-black hover:scale-130 transition-all  rounded " 
            >
                {buttonText}
            </button>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full rounded-xl w-1/2 bg-white z-50
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close */}
                <button
                    onClick={() => setOpen(false)}
                    className="p-4 text-xl"
                >
                    ✕
                </button>

                {/* Content */}
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                    {card.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <div className="space-y-4">
                            {card.map((product, index) => (
                                <div key={index} className="flex gap-4 border-b pb-4">
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        width={80}
                                        height={80}
                                        className="rounded"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold">{product.title}</h3>
                                        <p className="text-gray-600">${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </>
    );
}

