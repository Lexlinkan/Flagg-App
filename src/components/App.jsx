import {
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import FlagProfile from "./FlagProfile";
import Home from "./Home";

function App() {
  const findCountryByName = (name, data) => {
    return data.find((country) => country.name.common === name) || null;
  };

  const [data, setData] = useState([]);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    console.log("Toggling dark mode");
    if (isDarkMode) {
      document
        .querySelector(":root")
        .style.setProperty("--background-color", "#f2f2f2");
      document
        .querySelector(":root")
        .style.setProperty("--component-color", "#fff");
      document.querySelector(":root").style.setProperty("--text-color", "#000");
    } else {
      document
        .querySelector(":root")
        .style.setProperty("--background-color", "#202C36");
      document
        .querySelector(":root")
        .style.setProperty("--component-color", "#2B3844");
      document.querySelector(":root").style.setProperty("--text-color", "#fff");
    }
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/data.json");
      const json = await response.json();
      console.log(json);
      setData(json);
    };
    getData();
  }, []);

  return (
    <div className="flex-container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            path="/:name"
            element={
              <FlagProfile
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                findCountryByName={findCountryByName}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
