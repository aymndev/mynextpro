"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { getData } from "../lib/api"

export default function ProductCard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData().then((data) => {
            setProducts(data);


        });


    }, []);


    return (

        <div className='grid grid-cols-4 gap-6 '>
            
            {products.map((product) => (
                <div key={product.id} className=' flex flex-col rounded-[15] border-black shadow-lg mb-5 items-center hover:shadow-2xl hover:scale-105 transition-all'>
                    <img
                        className=' bg-gradient-to-b from-gray-200  to-stone-600 shadow-lg h-auto w-auto object-cover rounded-xl'
                        src={product.images[0]}
                        alt={product.title}
                        width={150}

                    />
                    <div className='rounded-]'>



                        <h2 className='flex justify-center text-xl pt-t font-bold'>{product.title}</h2>
                        <div className='flex pb-5 justify-between gap-2' >
                            <p className='text-lg font-bold'>Price: ${product.price}</p>
                            <button className='bg-gray-500 text-white rounded-[10px] p-1 ml-5'>Add to card</button>

                        </div>


                    </div>




                </div>




            ))}



        </div>
    )
}
