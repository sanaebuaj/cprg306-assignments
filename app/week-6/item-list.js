import { useState } from 'react';
import Item from "./item";

const ItemList = ({ items }) => {
    const [sortBy, setSortBy] = useState("name");

    const sortItems = (sortType) => {
        setSortBy(sortType);
    };

    
    const sortedItems = [...items].sort((a, b) => {
        if (a[sortBy] > b[sortBy]) return 1;
        if (a[sortBy] < b[sortBy]) return -1;
        return 0;
    });

    return (
        <div className='text-white ml-3'>
            Sort by:
            <button className='border b-2 border-black bg-orange-500 p-1 ml-2 w-28' onClick={() => sortItems("name")} >Name</button>
            <button className='border b-2 border-black bg-orange-700 p-1 w-28 ml-3' onClick={() => sortItems("category")} >Category</button>
            {sortedItems.map(item => (
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
        </div>
    );
};

export default ItemList;



 
















 

 




 
  

 
  

