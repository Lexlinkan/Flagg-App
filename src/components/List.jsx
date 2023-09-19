import React, { useEffect, useState, Link } from "react";
import Card from "./Card";
import FlagProfile from "./FlagProfile";
import "./List.css";

export default function List({ handleInputChange, selectedRegion }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/data.json");
      const json = await response.json();
      console.log(json);
      setData(json);
    };
    getData();
  }, []);

  const filteredData = data.filter(
    (country) =>
      country.name &&
      country.name.toLowerCase().includes(handleInputChange.toLowerCase())
  );

  const filteredByRegion =
    selectedRegion !== "Filter By Region"
      ? filteredData.filter(
          (country) => country.region === selectedRegion
        )
      : filteredData;

  return (
    <div className="Container">
      {filteredByRegion.map((country) => {
        return (
            <Card
              name={country.name}
              png={country.flags.png}
              key={country.name}
              capital={country.capital}
              population={country.population}
              currencies={country.currencies}
              nativeName={country.nativeName}
              language={country.language}
              topLevelDomain={country.topLevelDomain}
              borderCountries={country.borderCountries}
            />  
        );
      })}
    </div>
  );
}

