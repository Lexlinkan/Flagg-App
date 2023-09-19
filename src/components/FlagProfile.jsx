import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import "./FlagProfile.css";
import { useParams } from "react-router";
import { useNavigate, Link } from "react-router-dom";
import arrowDark from "../assets/arrow-left-dark.svg";
import arrowLight from "../assets/arrow-left.svg";

export default function FlagProfile({
  isDarkMode,
  toggleDarkMode,
  findCountryByName,
  currencies,
  nativeName,
  language,
  topLevelDomain,
  borderCountries,
}) {
  const { name } = useParams();
  const navigate = useNavigate();
  const [fetchedData, setFetchedData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState(null);

  const handleNavigation = () => {
    // Navigate to a specific route
    navigate("/");
  };

  function BorderCountryButton({ countryName }) {
    return (
      <Link to={`/flagprofile/${countryName}`}>
        <button className="border-country-button">{country.name}</button>
      </Link>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setFetchedData(jsonData);
        setIsLoading(null); //
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading && fetchedData.length > 0) {
      const foundCountry = findCountryByName(name, fetchedData);
      setCountry(foundCountry);
    }
  }, [fetchedData, name, isLoading]);

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="Flag-profile">
          <div className="arrow-back" onClick={handleNavigation}>
            <img
              className="Arrow"
              src={isDarkMode ? arrowLight : arrowDark }
              alt=""
            />
            <p>Back</p>
          </div>
          {country ? (
            <div className="Flag-container">
              <img className="Image" src={country.flags.png} alt="" />
              <div className="vänster">
                <h1>{country.name.common}</h1>
                <p>
                  <span className="label">Population:</span>{" "}
                  {country.population}
                </p>
                <p>
                  <span className="label">Region:</span> {country.region}
                </p>
                <p>
                  <span className="label">Capital:</span> {country.capital[0]}
                </p>
                <p>
                  <span className="label">Native name:</span>{" "}
                  {country.nativeName}
                </p>
                <p>
                  <span className="label">Border Countries:</span>{" "}
                  {country.borders ? country.borders.join(", ") : "N/A"}
                </p>
              </div>
              <div className="höger">
                <p>
                  <span className="label">Top level domain:</span> {country.tld}
                </p>
                <p>
                  <span className="label">Currencies:</span>{" "}
                  {Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                </p>
                <p>
                  <span className="label">Language:</span>{" "}
                  {Object.values(country.languages).join(", ")}
                </p>
              </div>
            </div>
          ) : (
            <div>Country not found</div>
          )}
        </div>
      )}
    </div>
  );
}

{
  /* <p>currencies={country.currencies}</p>
<p>ativeName={country.nativeName}</p>
<p>language={country.language}</p>
<p>topLevelDomain={country.topLevelDomain}</p>
<p>borderCountries={country.borderCountries}</p> */
}
