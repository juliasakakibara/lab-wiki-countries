import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../countries.json'
import { Link } from 'react-router-dom/';

const CountriesList = (props) => {
return (
    <div>
        <ul style={{ overflow: 'scroll', height: '100vh' }}>
                {props.countries.map((country) => {
                   return (
                    <Link key={country.cca3} 
                                  className='list-group-item list-group-item-action'
                                  to={'/' + country.cca3}>
                                <img className='flags'
                                    src={country.flag}/>
                                {country.name.common}
                    </Link>
                   );
                })}
            </ul>
    </div>
)
}

export default CountriesList;