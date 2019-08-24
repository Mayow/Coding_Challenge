import React from 'react';
import { useState } from 'react';
import Search from './Search'
import StockList from './StockList.js'
import Fetch from './Fetch'


function Main() {
  const [search, setSearch] = useState(" ");
  const [stocksList, setList] = useState([]);

  const addStock = text => {
    const newStocks = [...stocksList, { text }];
    setList(newStocks);
  };

  var stockArray=[];
  
  stocksList.forEach(function(element) {
    stockArray.push(element["text"]);
  });
  
  return (
    <div>
      <Search search={search} setSearch={setSearch} addStock={addStock}/>
      <StockList stocksList={stockArray}/>

    </div>
  );

}

export default Main;