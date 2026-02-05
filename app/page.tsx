"use client"
import { MenuContext } from "@/context/MenuContext";
import Image from "next/image";
import { FaShoppingBasket } from "react-icons/fa";
import { useContext, useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import DrawerBaskit from "./components/DrawerBaskit";


export default function Home() {
  const [input, setIinput] = useState("");
  const { open } = useContext(MenuContext);
  return (
    <div className={`rounded-[19px] ml-5 mr-5 pt-5 flex  justify-center bg-gray-200 h-360 w-370 ${open ? "w-370" : "w-418 ml-5"}`}>

      <div>
        <button className=" rounded-[5px] bg-black text-gray-50 p-1 items-center mr-[120px] h-9">
          Category
          <span>
            
                <IoIosArrowDown className="inline-block align-middle ml-5 " />
            
            

          </span>
        </button>
        <input
          value={input}
          onChange={(e) => setIinput(e.target.value)}
          className=" focus:outline-none rounded-l-md bg-white color-black  p-1 "
          placeholder="Search for new products.."


        />
        <button className=" rounded-r-[5px] bg-black text-gray-50 p-1">Search</button>
      </div>
      <div>
        <DrawerBaskit/>

      </div>





    </div>
  );
}
