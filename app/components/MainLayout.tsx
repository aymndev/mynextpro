"use client";

import Link from 'next/link';
import Header from './Header'

import React, { useContext } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa6";
import { FaCheck, FaCheckDouble } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { MenuContext } from '@/context/MenuContext';
import Clinet from "./Clinet"

const MainLayout = ({ children }) => {
  
  const { open }= useContext(MenuContext);

  return (
    <div className='bg-gray-100 w-full min-h-screen'>
      <Header />
      <div className='flex justify-start items-start'>
        {/*className='bg-white rounded-lg w-60 p-4'
        transition-all -->
        for hidde border "overflow-hidden"
        md: = “apply this style onsticky top-0 medium screens and up”
        
        */}

        <aside className={`sticky top-0 bg-white rounded-lg h-180  overflow-hidden transition-all duration-500 ${open ? "w-60 p-4 " : "w-0"

        } `}>
          <ul>
            <li className='flex justify-start items-center text-black hover:bg-blue-200 hover:text-blue-800 rounded-xl  p-2'>
              <IoHomeOutline className='mr-2' />
              <Link href='/'>Home</Link>


            </li>
            <li className='flex justify-start items-center text-black hover:bg-blue-200 rounder-2 hover:text-blue-800 rounded-xl  p-2'>
              <GrProjects className='mr-2' />
              <Link href="./projects" className='flex-1'><h3>Projects</h3></Link>
              
              <FaAngleRight />


            </li>
            <li className='flex justify-start items-center  text-black hover:bg-blue-200 rounder-2 hover:text-blue-800 rounded-xl  p-2'>
              <FaCheck className='mr-2' />

              <h3 className='flex-1'>Singule</h3>

              <FaAngleRight />


            </li>
            <li className='flex justify-start items-center text-black hover:bg-blue-200 rounder-2 hover:text-blue-800 rounded-xl  p-2'>
              <FaCheckDouble className='mr-2' />

              <h3 className='flex-1'>Singule</h3>

              <FaAngleRight />


            </li>
            <li className='flex justify-start items-center text-black hover:bg-blue-200 rounder-2 hover:text-blue-800 rounded-xl  p-2'>
              <FcAbout className='mr-2' />

              <Link href='/about-us'><h3 className='flex-1'>About us</h3></Link>




            </li>
            <li className='flex justify-start items-center text-black hover:bg-blue-200 rounder-2 hover:text-blue-800 rounded-xl  p-2'>
              <IoIosContacts className='mr-2' />

              <Link href ='./contact' className='flex-1'><h3 >Contact us</h3></Link>
              <div>


              </div>




            </li>
          </ul>
          <Clinet />
        </aside>
        <main className='flex'>
          {children}
        </main>

      </div>




    </div>
  )
}

export default MainLayout;