
"use clinet"
import React from 'react'
import { GoArrowRight } from "react-icons/go";
import Image from 'next/image'

export default function Clinet() {
    return (
        <div className='flex flex-col rounded-lg bg-gray-200 full-w mt-92'>
            <div className='flex'>
                

                <Image
                    src="/photo-1494790108377-be9c29b29330.avif"
                    width={25}
                    height={25}
                    alt="Client photo"
                    className='rounded-[800px]  m-1 mt-3 h-12 w-13'
                />
                <h1 className=' pl-5 pt-2 font-bold text-lg'>
                    Emma

                </h1>
                <GoArrowRight  className=' ml-7   mt-8'/>

            </div>


            <div>
                <p className='font-thin text-sm text-center  pb-2 ml-9'>imagne@gmail.com</p>
            </div>



        </div>
    )
}


