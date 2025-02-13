import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import axios from 'axios';
import { Button, Input } from '@chakra-ui/react';

export const Productform = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [tag, setTag] = useState('');
    const [email, setEmail] = useState('');
    const [preview, setPreview] = useState([]);
    const [image, setImage] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImage((prev) => [...prev, ...files]);
        const imagePreviews = files.map((file) => URL.createObjectURL(file));
        setPreview((prev) => [...prev, ...imagePreviews]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('stock', stock);
        formData.append('tag', tag);
        image.forEach((img) => formData.append('images[]', img));

        try {
            const res = await axios.post('http://localhost:5000/create-product', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (res.status === 200) {
                setEmail('');
                setName('');
                setPrice('');
                setDescription('');
                setCategory('');
                setStock('');
                setTag('');
                setImage([]);
                setPreview([]);
                alert('Product Added Successfully');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className='mt-4'>
                    <label className='pb-1 block'>Email <span className='text-red-500'>*</span></label>
                    <Input
                        type='email'
                        value={email}
                        className='w-full p-2 border rounded'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Your Email'
                        required
                    />
                </div>

                <div className='mt-4'>
                    <label className='pb-1 block'>Name <span className='text-red-500'>*</span></label>
                    <input
                        type='text'
                        value={name}
                        className='w-full p-2 border rounded'
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter Product Name'
                        required
                    />
                </div>

                <div className='mt-4'>
                    <label className='pb-1 block'>Price <span className='text-red-500'>*</span></label>
                    <input
                        type='text'
                        value={price}
                        className='w-full p-2 border rounded'
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Enter Product Price'
                        required
                    />
                </div>

                <div className='mt-4'>
                    <label className='pb-1 block'>Description <span className='text-red-500'>*</span></label>
                    <Input
                        type='text'
                        value={description}
                        className='w-full p-2 border rounded'
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Enter Product Description'
                        required
                    />
                </div>

                <div className='mt-4'>
                    <label className='pb-1 block'>Category <span className='text-red-500'>*</span></label>
                    <Input
                        type='text'
                        value={category}
                        className='w-full p-2 border rounded'
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder='Enter Product Category'
                        required
                    />
                </div>

                <div className='mt-4'>
                    <label className='pb-1 block'>Stock <span className='text-red-500'>*</span></label>
                    <input
                        type='text'
                        value={stock}
                        className='w-full p-2 border rounded'
                        onChange={(e) => setStock(e.target.value)}
                        placeholder='Enter Product Stock'
                        required
                    />
                </div>

                <div className='mt-4'>
                    <label className='pb-1 block'>Tag <span className='text-red-500'>*</span></label>
                    <input
                        type='text'
                        value={tag}
                        className='w-full p-2 border rounded'
                        onChange={(e) => setTag(e.target.value)}
                        placeholder='Enter Product Tag'
                        required
                    />
                </div>

                <div className='mt-4'>
                    <label className='pb-1 block'>Upload Images <span className='text-red-500'>*</span></label>
                    <input
                        type='file'
                        name='image'
                        id='upload'
                        className='hidden'
                        multiple
                        onChange={handleImageChange}
                        required
                    />
                    <label htmlFor="upload" className='cursor-pointer'>
                        <AiOutlinePlusCircle size={30} className='text-blue-500' />
                    </label>

                    <div className='flex flex-wrap mt-2'>
                        {preview.map((img, index) => (
                            <div key={index} className='relative m-2'>
                                <img src={img} alt="preview" className='w-32 h-32 object-cover rounded-lg shadow-md' />
                            </div>
                        ))}
                    </div>
                </div>

                <Button colorScheme='blue'>
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default Productform;