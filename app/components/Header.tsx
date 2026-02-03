import React from 'react'


import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    
        <div className='bg-white flex justify-between items-center p-[25px] h-12 mb-4'>
            <div>
                Brand
            </div>
            <div>
                <FaBars className='cursor-pointer'/>
            </div>


        </div>
    

)
}

export default Header;