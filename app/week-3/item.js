import react from "react";

const Item = ({ name, quantity, category }) => {
    return (
      <ul className="bg-slate-900 text-white p-2 m-4 max-w-sm">
        <div>
         <li className="text-xl font-bold m-1/2">{name}</li>
        </div>
        <div>
            <li className="text-sm font-normal">
         {`Buy ${quantity} in ${category}`}
          
        </li></div>
      </ul>
    );
  };
  
  

export default Item;
