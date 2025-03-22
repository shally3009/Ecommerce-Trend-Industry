import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useParams } from 'react-router-dom';

const Singlecard = () => {
     
    const {product,setproduct}=useState({})
    const {quantity,setQuantity}=useState(0)
    const {loading,setLoading}=useState(true)
    const {error,setError}=useState(false)
    const {id}=useParams()


const handleDecrement=()=>{
   setQuantity(prev=>prev>1?prev-1:1)
}

const handleIncrement=()=>{
    setQuantity(prev=>prev+1)
}


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/product/${id}`
                );
                console.log("Fetched product:", response.data.product);
                setproduct(response.data.product); // Ensure correct state setting
                setLoading(false);
            } catch (err) {
                console.error("Error fetching product:", err);
                setError(true);
                setLoading(false);
            }
        };
  
        fetchProduct();
    },[id]);

    if(loading){
        return <p>Loading</p>
    }
    else if ( error){
        return <p>Error</p>
    }
  return (
     <div>
            <div>
            <div className="w-full bsm:w-2/3 md:w-1/3 rounded-lg">
        {product.images && product.images.length > 0 ? (
            <img
                src={`http://localhost:3000${product.images[0]}`}
                alt={product.name}
                className="w-full h-full object-contain bsm:object-cover"
                style={{ maxHeight: "500px" }} // Adjust the max height as needed
            />
        ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                No Image Available
            </div>
        )}
    </div>
       <div><div className="md:w-1/2 p-6">
                                <h1 className="text-3xl font-semibold mb-4 text-gray-800">
                                    {product.name}
                                </h1>
       
                                <div className="mb-4">
                                    <h2 className="text-xl font-medium text-gray-700">
                                        Description
                                    </h2>
                                    <p className="text-gray-600 mt-2">
                                        {product.description}
                                    </p>
                                </div>
    
                                <div className="flex flex-wrap gap-x-5 my-2">
                                    <div>
                                        <h2 className="text-xl font-medium text-gray-700">
                                            Category
                                        </h2>
                                        <p className="text-gray-600 mt-2">
                                            {product.category}
                                        </p>
                                    </div>
    
                                    {product.tags && product.tags.length > 0 && (
                                        <div>
                                            <h2 className="text-xl font-medium text-gray-700">
                                                Tags
                                            </h2>
                                            <div className="mt-2 flex flex-wrap">
                                                {product.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
    
                                <div className="flex flex-wrap gap-x-5 mt-3 mb-5 items-start">
                                    <div className="flex flex-col gap-y-3">
                                        <h2 className="text-xl font-medium text-gray-700">
                                            Price
                                        </h2>
                                        <p className="text-gray-600 text-lg font-semibold">
                                            ${product.price}
                                        </p>
                                    </div></div>
                                    
                                    
                                    </div>
         </div>
    
    </div>
    <div className="flex flex-wrap gap-x-5 mt-3 mb-5 items-start">
                            
                                    {/* 4. Update Quantity Section */}
                                    <div className="flex flex-col gap-y-3">
                                        <div className="text-xl font-medium text-gray-700">
                                            Quantity
                                        </div>
                                        <div className="flex flex-row items-center gap-x-2">
                                            {/* 5. Attach onClick to Increment Button */}
                                            <div
                                                onClick={handleIncrement}
                                                className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 active:translate-y-1 p-2 rounded-xl cursor-pointer"
                                            >
                                                <FaPlus />
                                            </div>
                                            {/* 6. Display Current Quantity */}
                                            <div className="px-5 py-1 text-center bg-gray-100 rounded-xl pointer-events-none">
                                                {quantity}
                                            </div>
                                            {/* 7. Attach onClick to Decrement Button */}
                                            <div
                                                onClick={handleDecrement}
                                                className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 active:translate-y-1 p-2 rounded-xl cursor-pointer"
                                            >
                                                <FaMinus />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-x-5 my-3">
                                    <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-neutral-800 hover:-translate-y-1.5 active:translate-y-0 transition-transform duration-200 ease-in-out active:duration-0 active:ease-linear">
                                        Add to Cart
                                    </button>
                                </div>
    </div>
  )
}

export default Singlecard