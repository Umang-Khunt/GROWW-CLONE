import { useState } from "react";
import { watchlist } from "./data/data";
import WatchListItem from "./WatchListItem";

function WatchList() {
    return ( <>
    
  <div className="watchlist-container"  style={{height:"90vh"}} >
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="  Search Stocks,MF,F&O"
          className="search p-0"
          style={{height:"3rem",color:"black"}}
        />
        <span className="counts"> 9 / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return(
         
            <WatchListItem stock={stock}  key={index}/>
        
          )
        })}
      </ul>
    </div>
    
    </> );
}

export default WatchList;