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
  // console.log("------------------");

  // console.log(stocksList);
  return (
    <div>
      <Search search={search} setSearch={setSearch} addStock={addStock}/>
      
      <StockList stocksList={stocksList}/>
      <Fetch addStock={addStock} searchValue={search}/>

    </div>
  );

}

export default Main;