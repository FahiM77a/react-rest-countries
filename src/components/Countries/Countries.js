import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h1>Hello from Countries</h1>
            <p>Total Country: {countries.length}</p>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.capital}
                        country={country}>

                    </Country>)
                }
            </div>

        </div>
    );
};

export default Countries;