import React from 'react'
import Header from './Header'
import { IoHomeOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa6";
import { FaCheck,FaCheckDouble} from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import Link from 'next/link';
const MainLayout = ({ children }) => {
  return (
    <div className='bg-gray-100 w-full min-h-screen'>
      <Header/>
      <div className='flex justify-start items-start'>
        <aside className='bg-white rounded-lg w-60 p-4'>
          <ul>
            <li className='flex justify-start items-center text-black hover:bg-blue-200 hover:text-blue-800 rounded-xl  p-2'>
              <IoHomeOutline  className='mr-2'/>
              <Link  href='/'>Home</Link>
              

            </li>
            <li className='flex justify-start items-center text-black hover:bg-blue-200 rounder-2 hover:text-blue-800 rounded-xl  p-2'>
              <GrProjects className='mr-2'/>
              <h3  className='flex-1'>Projects</h3>
              <FaAngleRight />
              

            </li>
            <li className='flex justify-start items-center text-black hover:bg-blue-200 rounder-2 hover:text-blue-800 rounded-xl  p-2'>
              <FaCheck className='mr-2'/>
              
              <h3  className='flex-1'>Singule</h3>
              
              <FaAngleRight />
              

            </li>
            <li className='flex justify-start items-center text-black hover:bg-blue-200 rounder-2 hover:text-blue-800 rounded-xl  p-2'>
              <FaCheckDouble className='mr-2'/>
              
              <h3  className='flex-1'>Singule</h3>
              
              <FaAngleRight />
              

            </li>
            <li className='flex justify-start items-center text-black hover:bg-blue-200 rounder-2 hover:text-blue-800 rounded-xl  p-2'>
              <FcAbout className='mr-2'/>
              
              <h3  className='flex-1'>About as</h3>
              
             
              

            </li>
          </ul>
          </aside>
        <main className='flex'>
          {children}
        </main>        

      </div>
      



    </div>
  )
}

export default MainLayout