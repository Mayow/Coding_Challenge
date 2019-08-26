import React from 'react';
import StockItem from './StockItem.js'


function StockList({ stocksList, setList, removeStock }) {

  return (
    <div className="cardDisplyFlex">
      {stocksList.map((stock, index) => (
        <StockItem stock={stock} stocksList= {stocksList} index={index} key={index} removeStock={removeStock}/>
      ))}
    </div>
  );
}

export default StockList;