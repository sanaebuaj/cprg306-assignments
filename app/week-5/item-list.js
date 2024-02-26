"use client"
import { useState } from 'react';
import Data from "./items.json";
import Item from "./item";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  const [items, setItems] = useState(Data);
  const [reduce,setReduce] =useState('');


  const sortItems = (sortType) => {
    setSortBy(sortType);
    const sortedItems = [...items].sort((a, b) => {
      if (a[sortType] > b[sortType]) return 1;
      if (a[sortType] < b[sortType]) return -1;
      return 0;
    });
    setItems(sortedItems);
  };

 const reduceItems = () => {
 const totalCategory = items.reduce((total, item) => {
 console.log(` ${item.category}`)  
 return total + item.category}, 0);
    setReduce(totalCategory);
};




 
  

 
  return (
    <div className='text-white ml-3 mt-2 mb-4  '>Sort by:
      <button className='border b-2 border-black bg-orange-700  p-1 ml-2 w-28' onClick={() => sortItems("name")} >Name</button>
      <button className='border b-2 border-black  bg-orange-700 p-1 w-28 ml-3' onClick={() => sortItems("category")} >Category</button>
      <button className='border b-2 border-black bg-orange-500  p-1 ml-2 w-28 mb-3' onClick={(reduceItems)} >Grouped Category</button> 
      {items.map(item => (
         <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
         ))}
      
    </div>
  );

};
export default ItemList;
