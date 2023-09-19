import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import List from "./List";
import DropDown from "./DropDown";
import { useState } from "react";
import FlagProfile from "./FlagProfile";
import './Home.css'

export default function Home({toggleDarkMode, isDarkMode}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Filter By Region");

  const handleSearch = (inputValue) => {
    setSearchTerm(inputValue);
  };

  const handleRegionChange = (selectedOption) => {
    setSelectedRegion(selectedOption);
    console.log(selectedOption);
  };

  return (
    <div className="App">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div
        className="bar-container"
      >
        <SearchBar className="searchBar" handleInputChange={handleSearch} />
        <DropDown
          className="dropdown"
          options={[
            "Filter By Region",
            "Europe",
            "Asia",
            "Africa",
            "Americas",
            "Oceania",
          ]}
          selectedOption={selectedRegion}
          handleOptionChange={handleRegionChange}
        />
      </div>
      <List handleInputChange={searchTerm} selectedRegion={selectedRegion} />
    </div>
  );
}
