"use client";
import React from 'react';
import { getItems, addItem } from '../_services/shopping-list-service.js';
import { useEffect, useState } from 'react';
import ItemList from './item-list.js';
import NewItem from "./new-item"
import MealIdeas from './meal-ideas.js';
import { useUserAuth } from "../_utils/auth-context";
import { getAuth } from "firebase/auth";




export default function  shoppingPage() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth();

    async function loadItems() {
        try {
          const auth = getAuth();
          const user = auth.currentUser;
    
          if (user) {
            const shoppingListItems = await getItems(user.uid);
            setItems(shoppingListItems);
          }
        } catch (error) {
          console.error("Error loading items:", error);
        }
      }
    
      useEffect(() => {
        loadItems();
      }, [user]);
    
    


      function handleItemSelect(newItem) {
        const newItemSplit = newItem.split(',');
        const newItemNoEmoji = newItemSplit[0].replace(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g, '');
        const newItemTrimmed = newItemNoEmoji.trim();
       
        setSelectedItemName(newItemTrimmed);
        console.log("selected: ", newItemTrimmed)
    }

    const handleAddItem = async (newItem) => {
        try{
            const auth = getAuth();
            const user = auth.currentUser;

            if (user) {
                const newItemsId = await addItem(user.uid, newItem);

                const newItemWithId = {id: newItemsId, data:newItem};

                setItems(prevItems=> [...prevItems, newItem]);

    
            }
        }catch (error){
            console.error("Error adding item:", error);
        }
        
    };
if (user) {
    return (
        <main className = " min-h-screen bg-slate-950">
            <h1 className='pl-4 pt-4 text-3xl text-white font-extrabold'>Shopping List</h1>
            <div className="flex">
                <div className=''>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas  ingredient={selectedItemName} />
            </div>
        </main>
    )
}
}
