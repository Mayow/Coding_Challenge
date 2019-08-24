import React from 'react';
import { useState } from 'react';


function Search({ setSearch, addStock }) {
  const [searchValue, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchValue) return;

    //There is a limit to the api requests I got mulitiple API keys, if one isnt working, choose another one

    //   var key = 'G0PLT0JNFZNROQSX';
    //   var key = 'FUVE5ASUME9WDWAU';
      // var key = 'VR7VXUC220CPC76U';
      var key=  '78QTKTZ9NPBJTJUS';
    //   var key=  'P1YN9G4HHHNHBH8O';
    //   var key=  'H4LNSYBC4JFBMA33';
    
      var url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${searchValue}&apikey=${key}`;
            //console.log(searchValue);
      var stockValue;
      fetch(url)
        .then(response => response.json())
        .then((repos) => {

            var symbol=repos["Stock Quotes"][0]["1. symbol"];
            var price= repos["Stock Quotes"][0]["2. price"];
            var volume=repos["Stock Quotes"][0]["3. volume"];
            var timestamp=repos["Stock Quotes"][0]["4. timestamp"];

            var array_stock=[symbol,price, volume,timestamp];
            
            addStock(array_stock);
        })
    
        .catch(error => console.log("ERROR ERROR ERROR ERROR"));
    
    setSearch(searchValue);
    setValue(" ");
  };

  return (
    <div className="searchBar">

      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend" >
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <i className="fas fa-search text-white" aria-hidden="true"></i>
            search
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <input className="form-control my-0 py-1 searchInput" type="text" placeholder="Search" aria-label="Search"
            type="text"
            value={searchValue}
            onChange={e => setValue(e.target.value)}
          />
        </form>
      </div>

    </div>
  );

}

export default Search;