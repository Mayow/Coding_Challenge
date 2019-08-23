import React from 'react';
import { useState } from 'react';
import StockItem from './StockItem.js'


function StockList({ stocksList}) {
//  console.log("LIST");

  return (
    <div>

        {stocksList.map((stock, index) => (
            <StockItem stock={stock} key={index}/>
        ))}

    </div>
  );

}

export default StockList;