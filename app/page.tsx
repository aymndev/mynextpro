"use client"
import { MenuContext } from "@/context/MenuContext";
import Image from "next/image";
import { FaShoppingBasket } from "react-icons/fa";
import { useContext, useState } from "react"

export default function Home() {
  const [input,setIinput]=useState("");
  const { open }=useContext(MenuContext);
  return (
    <div className={`rounded-[19px] ml-5 mr-5 pt-5 flex  justify-center bg-gray-200 h-360 w-370 ${ open ?"w-370" :"w-418 ml-5"}` }>
      <div>
        <input
          value={input}
          onChange={(e)=>setIinput(e.target.value)}
          className=" focus:outline-none rounded-l-md bg-white color-black  p-1 "
          placeholder="Search for new products.."
        
        
        />
        <button className=" rounded-r-[5px] bg-black text-gray-50 p-1">Search</button>
      </div>
      <div>
        <FaShoppingBasket  size={27} className="h-9 ml-[150px]"/>

      </div>

      
      
      
    
    </div>
  );
}
