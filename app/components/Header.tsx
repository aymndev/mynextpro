"use client";

import { MenuContext } from "@/context/MenuContext";
import { TbBrandCupra } from "react-icons/tb";
import React, { useContext } from "react";
import Link from "next/link";



import { FaBars } from "react-icons/fa";

const Header = () => {
    const { toggle } = useContext(MenuContext);
    return (
        <div className='bg-gradient-to-r from-orange-600 via-orange-500 to-black shadow-xl sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-8 py-4'>
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="bg-white p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                        <TbBrandCupra className="w-8 h-8 text-orange-600"/>
                    </div>
                    <span className="text-white text-2xl font-bold hidden md:block">
                        My Store
                    </span>
                </Link>

                <button
                    onClick={toggle}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-white/30 transition-all"
                >
                    <FaBars className='cursor-pointer text-white text-xl' />
                </button>
            </div>
        </div>
    )
}

export default Header;