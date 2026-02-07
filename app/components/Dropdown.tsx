"use client";

import { useState } from "react";

export default function Dropdown({ buttonText, children }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Button */}
            <button
                onClick={() => setOpen(true)}
                className="px-4 py-2 bg-black text-white rounded"
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
                className={`fixed top-0 right-0 h-full w-1/2 bg-white z-50
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

                {/* Content (EMPTY by default) */}
                <div className="p-4">
                    {children}
                </div>
            </div>
        </>
    );
}

