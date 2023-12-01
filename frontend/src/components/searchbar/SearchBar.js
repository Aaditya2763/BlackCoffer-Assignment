import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file for styling
import {BiSearch}from 'react-icons/bi'
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
       <BiSearch className="search-icon"/>
      </button>
    </div>
  );
};

export default SearchBar;
