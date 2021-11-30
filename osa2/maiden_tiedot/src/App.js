import React, {useState, useEffect} from 'react';
import axios from 'axios';

const GetLanguages = (props) => {
  for(let lg in props.languages) {
  return(
    <li>{props.languages[lg]}</li>
  )
  }
}

function App() {

  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('')
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  
  const handleCountryChange = (event) => {
    setNewCountry(event.target.value)
    if(event.target.value === '') {
      setShowAll(true)
    } else {
      setShowAll(false)
    }
  }

  function showCountries() {
    if(showAll === true) {
      return countries;
    } else {
      const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(newCountry.toLowerCase()));
        return filteredCountries;
    }
    }

    function showOneCountry(name) {
      setNewCountry(name);
    }


  function checkLength() {
    const countries = showCountries()
    if(newCountry === "") {
      return <div></div>
    } else if (countries.length === 0) {
      return <div>Specify another filter, countries not found</div>
    } else if(countries.length > 10) {
      return <div>Specify another filter, too many matches</div>
    } else if (countries.length > 1) {
      return (
        showCountries().map(country =>
          <div key={country.name.common}>{country.name.common} {<button onClick={()=> showOneCountry(country.name.common)} id={country.name.common+'-button'}>show</button>} </div>))
    } else if(countries.length === 1) {
      const country = countries[0];

      return (
        <div>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital[0]}</div>
        <div>population {country.population}</div>
        <h2>languages</h2>
        <GetLanguages languages={country.languages} />
        <img src={country.flags.png} alt="flag"/>
        </div>
      )
    }
  }

  return (
    <div>
      <form>
        <div>Find countries <input value={newCountry} onChange={handleCountryChange} />
        </div>
      </form>
      {checkLength()}
    </div>
  );
}

export default App;
