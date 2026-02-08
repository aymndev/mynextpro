"use client";
import { useState, useEffect } from 'react'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function CategoryDropDd({ onCategoryChange }) {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err));
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onCategoryChange(category);
        setOpen(false);
    };

    return (
        <div className='relative '>
            <div className='flex  bg-gray-500  rounded-sm items-center gap-5 p-2 mr-5'>
                <button

                    className=' rounded-sm text-white  bg-gray-500 hover:bg-gray-600 flex items-center gap-1'

                >
                    {selectedCategory}
                </button>
                <span className='text-sm text-white'><IoIosArrowDown  onClick={() => setOpen(!open)}/></span>

            </div>

            {open && (
                <div className='absolute left-0 top-full w-60 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto'>
                    <ul className='p-2'>
                        <li
                            className='py-1 px-3 hover:bg-gray-100 rounded-lg cursor-pointer'
                            onClick={() => handleCategoryClick("All")}
                        >
                            All
                        </li>
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className='py-1 px-3 hover:bg-gray-100 rounded-lg cursor-pointer'
                                onClick={() => handleCategoryClick(category.slug)}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>




                </div>



            )

            }

        </div>
    )
}


