import React, { useState } from 'react';

function Search() {
  const [search, setSearch] = useState("inits");

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}


export default Search;
