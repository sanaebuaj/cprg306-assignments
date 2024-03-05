"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import React, { useState } from 'react';

const Page = () => {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <main >
            <div className="flex-row  bg-slate-950 min-h-screen">
            <h1 className="text-white text-3xl p-4 pb-1 font-bold">Shopping List</h1>
            <h3 className="text-white text-xl p-4 pb-1  font-bold">Add New Item</h3>
            <NewItem onAddItem={handleAddItem} />
        
            <ItemList items={items} />
            </div>
        </main>
    );
};

export default Page;
