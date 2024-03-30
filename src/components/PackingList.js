import { useState } from "react";
import Item from "./Items";

const PackingList = ({items,onDeleteItems,onToggleItems,onClearList}) => {

    const [sortBy, setSortBy] = useState("input");
    let sortedItems;
  
    if(sortBy === "input") sortedItems = items;
  
    if(sortBy === "description"){
      sortedItems = items.slice().sort((a,b)=> a.description.localeCompare(b.description));
    }
  
    if (sortBy === "isPacked")
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.isPacked) - Number(b.isPacked));
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item, i) => {
            return <Item iTem={item} key={i} handleRemove={onDeleteItems} onToggle={onToggleItems}/>;
          })}
        </ul>
        <div className='actions'>
            <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
              <option value='input'>Sort By Input Order</option>
              <option value='description'>Sort By Description Order</option>
              <option value='isPacked'>Sort By Packed Order</option>
            </select>
            <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
    );
  };

  export default PackingList;