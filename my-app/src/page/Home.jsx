import React from 'react'
import { Productcard } from '../Components/Productcard'
import { use } from 'react'
import React, { useState, useEffect } from 'react';


const productdetails=[
    // {
    //   image:"https://pixlr.com/images/generator/text-to-image.webp",
    //   name:"Product1",
    //   price:"$100",
    //   description:"new product"
    // },
    // {
    //   image:"https://pixlr.com/images/generator/text-to-image.webp",
    //   name:"Product2",
    //   price:"$100",
    //   description:"new product"
    // },
    // {
    //   image:"https://pixlr.com/images/generator/text-to-image.webp",
    //   name:"Product3",
    //   price:"$100",
    //   description:"new product"
    // },
    
  ]
export const Home = () => {

  useEffect(() => {
    fetch("http://localhost:3000/product/get-products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(HTTP error! status: ${res.status});
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className='w-full min-h-screen bg-neutral-800'>
    <div className="grid grid-cols-5 gap-4 p-4">{
        products.map((product,index)=>{
            return(
                <>
                <Productcard key={index} {...product}/></>
            )
    })}</div></div>
  )
}