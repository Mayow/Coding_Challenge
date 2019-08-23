import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';



function Search({setSearch}) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
              e.preventDefault();
              if (!value) return;
              setSearch(value);
              setValue(" ");
    };

  return (
    <div>
        
<div class="input-group md-form form-sm form-1 pl-0">
  <div class="input-group-prepend">
    <span class="input-group-text purple lighten-3" id="basic-text1">
        <i class="fas fa-search text-white"aria-hidden="true"></i> 
        search
    </span>
  </div>

  <form onSubmit={handleSubmit}>  
  <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
    </form>
</div>

    </div>
  );

}

export default Search;