
import React from 'react';


const Item = ({ name, quantity, category, onSelectItem }) => {
  const handleClickOfItem = () =>{
    console.log("Item clicked....")
}
   
  return (
    <div >
      <ul onClick={onSelectItem} className="bg-slate-900 hover:bg-orange-600 cursor-pointer text-white p-2 m-4 max-w-sm">
        <div>
         <li className="text-xl font-bold m-1/2">{name}</li>
        </div>
        <div>
            <li className="text-sm font-normal">
         {`Buy ${quantity} in ${category}`}
          
        </li></div>
      </ul></div>
    );
  };
  
  

export default Item;