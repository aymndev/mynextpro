"use client"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";

export default function DrawerBaskit () {
  return (
    <div className=''>
        <Drawer>
            <DrawerTrigger className='bg-black text-white'>
                Drawer Trigger
            </DrawerTrigger>
            <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>
                    Title

                </DrawerTitle>
                <DrawerDescription>
                    drawer description
                </DrawerDescription>
                
            </DrawerHeader>
            <DrawerFooter className='flex'>
                <DrawerClose>
                    {/*<button className='bg-black text-white px-3 py-2 text center rounded-ld sm-auto'>Close</button>*/}
                    <FaShoppingBasket size={27} className="h-9 ml-[120px]" />

                </DrawerClose>

            </DrawerFooter>

            </DrawerContent>


        </Drawer>


    </div>
  )
}
