
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import React, { useState } from 'react';

const ShoppingListPage = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");


    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };
    const handleItemSelect =(selectedIt)=>{
        
        console.log("handleItemSelect called");
		console.log("Received item:", selectedIt);
		console.log("Received item name:", selectedIt.name);

		const ErracedName = selectedIt.name.replace(/(,.*|🍛|🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🍽️|🧼)/g, '').trim();

		console.log("ErracedName:", ErracedName)
              
        setSelectedItemName(ErracedName);
    };

    return (
        <main >
            
        <div className="flex text-white bg-slate-950 ">
            <div className="flex-1 max-w-sm m-2">
                <h1 className="text-white text-3xl p-4 pb-1 font-bold">Shopping List</h1>
                <h3 className="text-white text-xl p-4 pb-1  font-bold">Add New Item</h3>
            
                <NewItem onAddItem={handleAddItem} />
                <div >
                <ItemList className="hover:bg-orange-600 cursor-pointer" items={items} onItemSelect={(selectedIt)=>handleItemSelect(selectedIt)}/>
                </div>
            </div>
            <div className=" flex-1  max-w-sm  pt-20 pl-4">
                <MealIdeas ingredient={selectedItemName} />
             
            </div>
        </div>
        </main>
    );
};

export default ShoppingListPage;
