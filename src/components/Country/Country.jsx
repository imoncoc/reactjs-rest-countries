import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const {region, area, population, name, flags} = props.country;
    return (
        <div className='country bg-warning-subtle p-5'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p><small>Area: {area}</small></p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;