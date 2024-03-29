import React from 'react';
import { useState } from 'react';
import Search from './Search'
import StockList from './StockList.js'

function Main() {
  const [search, setSearch] = useState(" ");
  const [stocksList, setList] = useState([]);

  const addStock = text => {
    const newStocks = [...stocksList, { text }];
    setList(newStocks);
  };

  const removeStock = e =>{
    const newstocksList = [...stocksList];
    newstocksList.splice(e, 1);
    setList(newstocksList);
  }

  var stockArray=[];
  stocksList.forEach(function(element) {
    stockArray.push(element["text"]);
  });

  return (
    <div>
      <h1> Stock Data Application</h1>
      <Search search={search} setSearch={setSearch} addStock={addStock} />
      <StockList stocksList={stockArray} setList={setList} removeStock={removeStock}/>
    </div>
  );

}

export default Main;