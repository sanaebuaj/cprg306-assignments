import react from "react";

const Item = ({ name, quantity, category }) => {
    return (
      <ul>
        <li className="p-2 m-4 text-xl font-bold  max-w-sm">{name}</li>
        <li className="text-sm font-normal">
         {`Buy ${quantity} in ${category}`}</li>
        
      </ul>
    );
  };
  
  

export default Item;
