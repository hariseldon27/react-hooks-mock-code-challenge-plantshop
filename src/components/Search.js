import React from "react";

function Search( { onSearchChange, searchTerm } ) {
  
  function handleSearchChange(e) {
    onSearchChange(e.target.value)
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
