"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import {getData}  from "../lib/api"

export default function ProductCard() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getData().then((data) => {
            setProducts(data);


        });


    }, []);


    return (

        <div className=''>
            <h1>Products List</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>price: ${product.price}</p>
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        width={100}




                    />



                </div>




            ))}



        </div>
    )
}
