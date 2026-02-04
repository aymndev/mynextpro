"use client";

import { MenuContext } from "@/context/MenuContext";
import { TbBrandCupra } from "react-icons/tb";
import React, { useContext } from "react";
import Link from "next/link";



import { FaBars } from "react-icons/fa";

const Header = () => {
    const { toggle } = useContext(MenuContext);
    return (

        <div className='bg-white flex justify-between items-center p-[25px] h-12 mb-4'>
            <div className="p-8">
                <Link href="/">
                    <TbBrandCupra className="w-9 h-9"/>

                </Link>
                
            </div>
            <div onClick={toggle} className="">
                <FaBars className='cursor-pointer' />
            </div>


        </div>


    )
}

export default Header;