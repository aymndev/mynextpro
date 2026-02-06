"use client"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";

export default function DrawerBaskit() {
    return (
        <div className=''>
            <Drawer direction='left'>
                <DrawerTrigger className='text-black px-3 py-2 text-center'>
                    <FaShoppingBasket size={27} className="h-9 ml-[120px]" />
                </DrawerTrigger>
                <DrawerContent className='w-1/2 h-full fixed bg-white shadow-lg'>
                    <DrawerHeader>
                        <DrawerTitle>
                            Cards

                        </DrawerTitle>
                        <DrawerDescription>

                        </DrawerDescription>

                    </DrawerHeader>
                    <div className='flex  flex-col justify-center items-center'>
                        <p className='max-w-50 h-auto mb-3'>hello aymane how are u to day</p>

                    </div>

                    <DrawerFooter className='flex'>
                        <DrawerClose>
                            <button className='bg-black text-white px-3 py-2 text center rounded-ld sm-auto'>Close</button>


                        </DrawerClose>

                    </DrawerFooter>

                </DrawerContent>


            </Drawer>


        </div>
    )
}
