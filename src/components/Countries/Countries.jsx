import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
    j;
  };

  // remove item from an array in a state
  // use filter to select all the elements excepts the one you want to remove

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited countries */}
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country, idx) => (
            <li key={idx}>{country.name.common}</li>
          ))}
        </ul>
        {/* visited flags */}
        <div className="flag-container">
          {visitedFlags.map((flag) => (
            <img key={flag} src={flag} />
          ))}
        </div>
      </div>
      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
