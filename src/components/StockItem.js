import React from 'react';
import '../App.css';

function StockItem({ stock, stocksList, setList, index,removeStock }) {

  return (
    <div className="column">
      <div className="stockCard">
        <button className="removeStockButtom" onClick={() => removeStock(index)}>x </button>

        <h6> Name: {stock[0]} </h6>
        <p>Price:  {stock[1]} </p>
        <p>Volume: {stock[2]} </p>
        <p style={{ fontSize: "13px"}}>Timestamp: {stock[3]} </p>
      </div>
    </div>

  );
}

export default StockItem;