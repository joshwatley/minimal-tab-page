import React from "react";
import "./searchBar.css";

const searchBar = () => {  
  return (
    <div className="searchContainer">
      <input
        type="text"
        name={'searchTerm'}
        id="header-search"
        placeholder="Search Google ..."
      />
      <button className="searchButton"type="submit" >Go</button>
    </div>
  );
};

export default searchBar;
