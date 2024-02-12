"use client";
import React, { useState } from 'react';

const NewItem = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name: name,
            quantity: quantity,
            category: category
        }

        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <main className='flex justify-center min-h-screen bg-black'>

            <form onSubmit={handleSubmit}>
                <div className='p-2 m-4 bg-slate-900 w-96'>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Item Name"
                        className='w-full mt-1 border-2 border-gray-300 mb-2 p-2 rounded-lg font-sans'
                    />

                    <div className='flex justify-between '>
                        <input
                            className='w-20 ml-1 border-2 border-gray-300 rounded-lg p-2 font-sans'
                            type="number"
                            min={1}
                            max={99}
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            placeholder="Quantity"
                            required
                        />

                        <select
                            className='ml-1 border-2 border-gray-300 rounded-lg p-2 font-sans'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                            <option value disabled>Category</option>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <button type="submit" className='w-full bg-blue-500  mt-4 py-2 px-4 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700'>+</button>
                </div>
            </form>

        </main>
    );
};

export default NewItem;
