import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountriesList() {
    const [countries, setCountries] = useState([]);
    const [fetching, setFetching] = useState(true);

    const getCountries = async () => {
        try {
          const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
          const countries = response.data;
          setCountries(countries);
          setFetching(false);  
      } catch(error) {
        console.log(error);
      }
    };

    useEffect(() => {
        getCountries();
    }, []);

    if (fetching) {
        return <h2>Cargando...</h2>;     
    } else {
        return (
    
    <div className="list-group">
         {countries.map((country) => {  
         return ( 
         <div className="countrieslist" key={country.name}>
            <Link className="list-group-item" to={`/${country.alpha3Code}`} ><p>{country.name.common}</p></Link>
    </div>
         );
         })}
    </div>   
     );
  }
}

export default CountriesList