import { useState } from "react";
import ItemList from "./itemList";
const RestaruntCategory = ({data, showItems, setShowIndex}) => {


    const handleClick = () => {
        setShowIndex();
    }

    return <div> 
        <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-4 ">

       <div className="flex justify-between" onClick={handleClick}>
            <span>{data.title} ({data.itemCards.length})</span>
            <span>Arrow</span>

            </div>
            {showItems &&  <ItemList items={data.itemCards} />  }

        
        </div>
       
         </div>
}


export default RestaruntCategory;