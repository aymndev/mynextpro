"use client"
import { MenuContext } from "@/context/MenuContext";
import Image from "next/image";
import { FaShoppingBasket } from "react-icons/fa";
import { useContext, useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import DrawerBaskit from "./components/DrawerBaskit";
import ProductCard from "./components/ProductCard";


export default function Home() {
  const [input, setIinput] = useState("");
  const { open } = useContext(MenuContext);
  return (
    <div className={`rounded-[19px] ml-5 mr-5 pt-5 flex flex-row justify-center bg-gray-50 h-auto w-370 ${open ? "w-370 pl-15" : "w-418 "}`}>

      <div className=" ">
        <div className="flex p-5 justify-center mb-8">
          <button className=" rounded-[5px] bg-black text-gray-50 p-1 items-center mr-[90px]  h-9">
            Category
            <span>

              <IoIosArrowDown className="inline-block align-middle ml-5 " />



            </span>
          </button>
          <input
            value={input}
            onChange={(e) => setIinput(e.target.value)}
            className="  focus:outline-none rounded-l-md bg-gray-100 color-black pl-[20px] pr-[55px] pt-[0px] py-[1px]"
            placeholder="Search for new products.."


          />

          <button className=" rounded-r-[5px] bg-black text-gray-50 p-1">Search</button>
          <div>
            <DrawerBaskit />

          </div>
        </div>
        <div className=" flex ">

          <ProductCard />


        </div>

      </div>










    </div>
  );
}
