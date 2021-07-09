import React from 'react'
import { Wrapper, Info } from './Country.styles';

const Country = ({country, darkmode}) => {
   
    const {flag, name, population, region, capital} = country;

    return ( 
        <Wrapper darkmode={`${darkmode}`} to={`/country/${name}`}>
            <img src={flag} alt='country flag'></img>
            <Info darkmode={darkmode}>
                <h2>{name}</h2>
                <p><span>Population:</span> {population}</p>
                <p><span>Region:</span> {region}</p>
                <p><span>Capital:</span> {capital}</p> 
            </Info>
        </Wrapper>
     );
}
 
export default Country;