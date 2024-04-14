import { useState } from 'react';
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
    const [sortBy, setSortBy] = useState("name");

    const sortItems = (sortType) => {
        setSortBy(sortType);
    };

    
    const itemList = [...items].sort((a, b) => {
        if (a[sortBy] > b[sortBy]) return 1;
        if (a[sortBy] < b[sortBy]) return -1;
        return 0;
    });

    const handleClickOfItem = () =>{
        console.log("Item clicked....")
    }

    return (
        <div className='text-white ml-3'>
            Sort by:
            <button className='border b-2 border-black bg-orange-500 p-1 ml-2 w-28' onClick={() => sortItems("name")} >Name</button>
            <button className='border b-2 border-black bg-orange-700 p-1 w-28 ml-3' onClick={() => sortItems("category")} >Category</button>
            {itemList.map(item => (
                <Item 
                key={item.id} 
                name={item.name} 
                quantity={item.quantity} 
                category={item.category}
                onSelectItem={() =>{ onItemSelect(item.name)} }/>
                
            ))}
        </div>
    );
};

export default ItemList;