"use client";

import Link from 'next/link';
import Header from './Header'

import React, { useContext } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaStore, FaTag, FaPercent, FaInfoCircle } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { MenuContext } from '@/context/MenuContext';

const MainLayout = ({ children }) => {
  
  const { open }= useContext(MenuContext);

  return (
    <div className='bg-gradient-to-br from-gray-50 to-gray-100 w-full min-h-screen'>
      <Header />
      <div className='flex justify-start items-start gap-4'>
        {/*className='bg-white rounded-lg w-60 p-4'
        transition-all -->
        for hidde border "overflow-hidden"
        md: = “apply this style onsticky top-0 medium screens and up”
        
        */}

        <aside className={`sticky top-0 bg-gradient-to-b from-slate-900 to-slate-800 rounded-xl shadow-2xl h-screen overflow-hidden transition-all duration-500 ${open ? "w-64 p-6" : "w-0"}`}>
          <div className="mb-8">
            <h2 className="text-white text-xl font-bold mb-2">Shop Menu</h2>
            <div className="h-1 w-16 bg-blue-500 rounded"></div>
          </div>

          <ul className="space-y-2">
            <li>
              <Link href='/' className='flex items-center text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg p-3 transition-all group'>
                <IoHomeOutline className='mr-3 text-xl group-hover:scale-110 transition-transform' />
                <span className="font-medium">Home</span>
              </Link>
            </li>

            <li>
              <Link href="/shop" className='flex items-center text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg p-3 transition-all group'>
                <FaStore className='mr-3 text-xl group-hover:scale-110 transition-transform' />
                <span className="font-medium">Shop</span>
              </Link>
            </li>

            <li>
              <Link href="/categories" className='flex items-center text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg p-3 transition-all group'>
                <BiCategory className='mr-3 text-xl group-hover:scale-110 transition-transform' />
                <span className="font-medium">Categories</span>
              </Link>
            </li>

            <li>
              <Link href="/deals" className='flex items-center text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg p-3 transition-all group'>
                <FaPercent className='mr-3 text-xl group-hover:scale-110 transition-transform' />
                <span className="font-medium">Deals</span>
              </Link>
            </li>

            <div className="my-4 border-t border-slate-600"></div>

            <li>
              <Link href='/about-us' className='flex items-center text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg p-3 transition-all group'>
                <FaInfoCircle className='mr-3 text-xl group-hover:scale-110 transition-transform' />
                <span className="font-medium">About Us</span>
              </Link>
            </li>

            <li>
              <Link href='/contact' className='flex items-center text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg p-3 transition-all group'>
                <IoIosContacts className='mr-3 text-xl group-hover:scale-110 transition-transform' />
                <span className="font-medium">Contact</span>
              </Link>
            </li>
          </ul>
        </aside>
        <main className='flex-1 w-full'>
          {children}
        </main>

      </div>




    </div>
  )
}

export default MainLayout;