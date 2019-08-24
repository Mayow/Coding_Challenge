import React from 'react';
import { useState } from 'react';
import '../App.css';

function StockItem({ stock }) {

  

  console.log('UUUUUUU ' + stock );

  return (
    <div className=" d-inline-block">
      <div className="card stockCard" >
        <div className="card-body">
          <h6 className="card-title"> Name: {stock[0]} </h6>
          <p className="card-text">Price:  {stock[1]} </p>
          <p className="card-text">Volume: {stock[2]} </p>
          <p className="card-text">Timestamp:  {stock[3]} </p>
        </div>
      </div> 
     

    </div>
  );
}

export default StockItem;