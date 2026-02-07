"use client"
import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import { getData } from "../lib/api"
import { CardContext } from '@/context/CardContext';

import { IoMdHeartEmpty } from "react-icons/io";

export default function ProductCard() {
    const [products, setProducts] = useState([]);
    const { addToCard } = useContext(CardContext);

    useEffect(() => {
        getData().then((data) => {
            setProducts(data);


        });


    }, []);


    return (

        <div className='grid grid-cols-4 gap-6 '>
            
            {products.map((product) => (
                <div key={product.id} className=' relative flex flex-col rounded-[15]  shadow-lg mb-5 items-center hover:shadow-2xl hover:scale-105 transition-all'>
                    <div className='absolute flex  top-2  right-[60px]'>
                            <IoMdHeartEmpty width={500} height={50} className='absolute top-2 text-3xl text-white bg-black  rounded-full p-1 ' />
                    </div>
                    
                    <img
                        className=' bg-gradient-to-b from-gray-200  to-stone-600 shadow-lg h-auto w-auto object-cover rounded-xl'
                        src={product.images[0]}
                        alt={product.title}
                        width={150}

                    />
                    <div className='p-5'>



                        <h2 className='flex justify-center text-xl pt-t font-bold'>{product.title}</h2>
                        <div className='flex pb-9 justify-between gap-2 pt-5' >
                            <p className='text-lg font-bold'>Price: ${product.price}</p>
                            <button 
                            onClick={()=>addToCard(product)}
                            
                            className='bg-gray-500 text-white rounded-[10px] p-1 ml-5 hover:bg-gray-600 hover:shadow-2xl'>
                                Add to cart
                            </button>

                        </div>


                    </div>




                </div>




            ))}



        </div>
    )
}
