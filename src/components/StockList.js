import React from 'react';
import { useState } from 'react';
import StockItem from './StockItem.js'


function StockList({ stocksList}) {

  return (
      
    <div className="cardDisplyFlex">
        {stocksList.map((stock, index) => (
            <StockItem stock={stock} key={index}/>
        ))}
    </div>
  );
}

export default StockList;