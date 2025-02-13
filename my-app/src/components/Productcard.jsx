import React, { useEffect } from 'react'
import { use } from 'react';
import React, { useState, useEffect } from 'react';



export const Productcard = ({image,name,price,description}) => {

  const {currentindex, setCurrentindex} = useState(0);
  useEffect(()=>{
    setInterval(()=>{
      setCurrentindex((prev)=>(prev+1)%image.length);

    },2000)
    return()=>{
      clearInterval(interval);
    }
  },[image])

  const currentimage = image[currentindex];
  
  return (
    <div className="bg-neutral-200 p-4 rounded-lg shadow-md flex justify-between flex-col">
      <div className='w-full'>
        <img src={image} alt={name} className='w-full h-56 object-cover rounded-lg mb-2'/>
        <h1 className='text-lg font-bold'>{name}</h1>
        <h3 className='text-sm opacity-50 line-clamp-2'>{description}</h3>
      </div>
      <div className='w-full'>
  <h1 className='text-lg font-bold my-2'>${price}</h1>
    <button className='w-full text-white px-4 py-2 rounded-md bg-neutral-900'>Buy Now</button>
    </div>
    </div>
  )
}