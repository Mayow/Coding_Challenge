import React from 'react';
import { useState } from 'react';

function Fetch({ addStock, searchValue }) {

  var stock = searchValue;

//   var key = 'G0PLT0JNFZNROQSX';
//   var key = 'FUVE5ASUME9WDWAU';
//   var key = 'VR7VXUC220CPC76U';
//   var key=  '78QTKTZ9NPBJTJUS';
  var key=  'P1YN9G4HHHNHBH8O';
//   var key=  'H4LNSYBC4JFBMA33';

  var url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${stock}&apikey=${key}`;
        //console.log(searchValue);

  fetch(url)
    .then(response => response.json())
    .then((repos) => {
        var stockValue;

        // console.log(repos["Stock Quotes"][0]["1. symbol"]);
        // console.log(repos["Stock Quotes"][0]["2. price"]);
        // console.log(repos["Stock Quotes"][0]["3. volume"]);
        // console.log(repos["Stock Quotes"][0]["4. timestamp"]);
        var symbol=repos["Stock Quotes"][0]["1. symbol"];
        //stockValue.symbol="QQQQQQ";

        // stockValue["symbol"]= repos["Stock Quotes"][0]["1. symbol"];
        // stockValue["price"]=repos["Stock Quotes"][0]["2. price"];
        // stockValue["volume"]=repos["Stock Quotes"][0]["3. volume"];
        // stockValue["timestamp"]=repos["Stock Quotes"][0]["4. timestamp"];
        
        
        // addStock(repos);
         console.log(repos);
    })

    .catch(error => console.log("ERROR ERROR ERROR ERROR"));

  return (
    <div>
        

    </div>
  );

}

export default Fetch;