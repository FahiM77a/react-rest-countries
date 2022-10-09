import React from 'react';
import './Country.css'

const Country = (Props) => {
    const { name, flag, region, population, capital } = Props.country;
    return (
        <div className='country'>
            <h2>Name: {name}</h2>
            <img src={flag} alt="" />
            <h2>Region: {region}</h2>
            <h2>Population: {population}</h2>
            <h2>Capital: {capital}</h2>
        </div>
    );
};

export default Country;