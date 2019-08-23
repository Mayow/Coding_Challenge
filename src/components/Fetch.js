import React from 'react';
import { useState } from 'react';

function Fetch({ addStock, searchValue }) {

  var stock = searchValue;

  var key = 'G0PLT0JNFZNROQSX';
  var url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${stock}&apikey=${key}`;
//   console.log(searchValue);

  fetch(url)
    .then(response => response.json())
    .then((repos) => {

        // console.log(repos["Stock Quotes"][0]["1. symbol"]);
        // console.log(repos["Stock Quotes"][0]["2. price"]);
        // console.log(repos["Stock Quotes"][0]["3. volume"]);
        // console.log(repos["Stock Quotes"][0]["4. timestamp"]);

        // var stockValue;
        // stockValue["symbol"]= repos["Stock Quotes"][0]["1. symbol"];
        // stockValue["price"]=repos["Stock Quotes"][0]["2. price"];
        // stockValue["volume"]=repos["Stock Quotes"][0]["3. volume"];
        // stockValue["timestamp"]=repos["Stock Quotes"][0]["4. timestamp"];
        
        console.log(repos);
        addStock("stockValue");f
    })
    
    .catch(error => console.log("ERROR ERROR ERROR ERROR"));

  return (
    <div>

      YOOOOOO {}

    </div>
  );

}

export default Fetch;