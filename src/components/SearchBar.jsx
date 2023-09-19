import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({ handleInputChange }) {
  const [inputValue, setInputValue] = useState("");

  const handelInputChange = (event) => {
    const input = event.target.value;
    setInputValue(input);
    handleInputChange(input);
  };

  return (
    <div className="SearchContainer">
      <input className="Search"
        type="text"
        placeholder="Search for a country..."
        value={inputValue}
        onChange={handelInputChange}
      />
    </div>
  );
}
