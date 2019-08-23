import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
import Search from './Search'

function Main() {
  const [search, setSearch] = useState(" ");
  const [fetch, setFetch] = useState(" ");


  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      
    </div>
  );

}

export default Main;