import React from 'react';
import { useState } from 'react';
import '../App.css';

function StockItem({ stock }) {



  console.log(stock);
  return (
    <div className=" d-inline-block">
      <div className="card stockCard" >
        <div className="card-body">
          <h5 className="card-title"> abc</h5>
          <p className="card-text"> abc    </p>
          <p className="card-text"> abc  </p>
          <p className="card-text"> abc </p>
        </div>
      </div> 
     
      {/* <div> {stock.text}</div> */}

    </div>
  );
}

export default StockItem;