"use client";

import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";


import { FaBars } from "react-icons/fa";

const Header = () => {
    const { toggle } = useContext(MenuContext);
    return (

        <div className='bg-white flex justify-between items-center p-[25px] h-12 mb-4'>
            <div>
                Brand
            </div>
            <div onClick={toggle}>
                <FaBars className='cursor-pointer' />
            </div>


        </div>


    )
}

export default Header;