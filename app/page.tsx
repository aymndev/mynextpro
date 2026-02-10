"use client"
import { MenuContext } from "@/context/MenuContext";

import { getData } from "./lib/api";

import { useContext, useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import DrawerBaskit from "./components/DrawerBaskit";
import ProductCard from "./components/ProductCard";
import Dropdown from "./components/Dropdown";
import { FaShoppingBasket } from "react-icons/fa";
import CategoryDropDd from "./components/CategoryDropDd";



export default function Home() {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("All");
  const { open } = useContext(MenuContext);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  return (
    <div className={`rounded-[19px] ml-1 mr-3 pt-2 flex flex-row justify-center bg-gray-50 h-auto w-370 ${open ? "w-370 pl-5" : "w-418 "}`}>

      <div className=" pr-5 pl-5 justify-between flex flex-col">
        <div className="flex p-5 justify-center  mb-0">
          {/*<button className=" rounded-[5px] bg-gray-500 hover:bg-gray-600  text-white mr-[90px] m-1 pb-1 pr-5 pl-5 h-9 font-bold">
            Category
            <span>

              <IoIosArrowDown className="inline-block align-middle ml-5  hover:scale-125 transition-all" />



            </span>
          </button> */}
          <CategoryDropDd onCategoryChange={handleCategoryChange} />

          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="  focus:outline-none rounded-l-md text-black bg-gray-200 pl-[5px] pr-[60px] pt-[0px] py-[1px]"
            placeholder="Search for new products.."


          />

          <button className=" rounded-r-[5px] bg-gray-500 hover:bg-gray-600 color-black text-white p-2  font-bold">Search</button>
          <div className="ml-25">
            {/*<DrawerBaskit />*/}
            <Dropdown buttonText={<FaShoppingBasket size={23} />}/>

            


          </div>
          
        </div>
         <hr className="border-black full-w my-6 border-0.5 mb-9"/>
        <div className=" flex bg-white ">
         
          

          <ProductCard searchTerm={input} category={category} />



        </div>

      </div>










    </div>
  );
}
