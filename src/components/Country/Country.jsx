import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button
        onClick={() => {
          handleVisitedCountries(country);
        }}
      >
        Mark Visited
      </button>
      <br />
      <button
        onClick={() => {
          handleVisitedFlags(country.flags.png);
        }}
      >
        Add Visited Flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <br />
      {/* {visited && "I have visited this country"} */}
    </div>
  );
};

export default Country;
