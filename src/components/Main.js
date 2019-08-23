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

  var jsonStock=JSON.stringify(stocksList);
  
  return (
    <div>
      <Search search={search} setSearch={setSearch} addStock={addStock}/>
      
      <StockList stocksList={jsonStock}/>

    </div>
  );

}

export default Main;