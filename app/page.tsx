"use client"
import { MenuContext } from "@/context/MenuContext";
import Image from "next/image";
import { FaShoppingBasket } from "react-icons/fa";
import { useContext, useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import DrawerBaskit from "./components/DrawerBaskit";
import ProductCard from "./components/ProductCard";
import Dropdown from "./components/Dropdown";


export default function Home() {
  const [input, setIinput] = useState("");
  const { open } = useContext(MenuContext);
  return (
    <div className={`rounded-[19px] ml-1 mr-3 pt-5 flex flex-row justify-center bg-gray-50 h-auto w-370 ${open ? "w-370 pl-5" : "w-418 "}`}>

      <div className=" pr-5 pl-5">
        <div className="flex p-5 justify-center mb-8">
          {/*<button className=" rounded-[5px] bg-gray-500 hover:bg-gray-600  text-white mr-[90px] pr-5 pl-5 h-9 font-bold">
            Category
            <span>

              <IoIosArrowDown className="inline-block align-middle ml-5  hover:scale-125 transition-all" />



            </span>
          </button>*/}
          <Dropdown buttonText="Category">
            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          </Dropdown>
          <input
            value={input}
            onChange={(e) => setIinput(e.target.value)}
            className="  focus:outline-none rounded-l-md text-black bg-gray-200 pl-[20px] pr-[55px] pt-[0px] py-[1px]"
            placeholder="Search for new products.."


          />

          <button className=" rounded-r-[5px] bg-gray-500 hover:bg-gray-600 color-black text-white p-2  font-bold">Search</button>
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
