import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { InfoWrapper, Back, Details, FlagWrapper, DetailsWrapper, Borders, StyledLink } from './CountryInfo.styles';

const CountryInfo = ({darkmode}) => {

    const {name} = useParams();

    const country = useSelector(state => state.countries.find(country => country.name === name));

    const countries = useSelector(state => state.countries);

    const {name : countryName , population, nativeName, region, subRegion, subregion, capital, topLevelDomain, currencies, languages, flag, borders} = country;

    const getBorderCountries = () => {
        const borderCountries =[];
        for(let i = 0; i < borders.length; i++) {
            const country = countries.find(item => item.alpha3Code === borders[i]);
            borderCountries.push(country.name);
        }; 
        return borderCountries
    }
    
    const borderCountries = getBorderCountries();

    return ( 
        <InfoWrapper darkmode={darkmode}>
            <Back darkmode={`${darkmode}`} to='/'><i className="fas fa-long-arrow-alt-left"></i>Back</Back>
            <FlagWrapper darkmode={darkmode}><img src={flag} alt="flag" /></FlagWrapper>
            <Details darkmode={darkmode}>
                <h3>{countryName}</h3>
                <DetailsWrapper>
                    <p><span>Native Name: </span> {nativeName}</p>
                    <p><span>Population: </span>{population}</p>
                    <p><span>Region: </span>{region}</p>
                    <p><span>Sub Region: </span>{subRegion || subregion }</p>
                    <p><span>Capital: </span>{capital}</p>
                    <p><span>Top Level Domain: </span>{topLevelDomain}</p>
                    <p><span>Currencies: </span>{currencies.map(item => item.code)}</p>
                    <p><span>Languages: </span>{languages.map(item => item.name).join(', ')}</p>
                </DetailsWrapper>
                <Borders>
                     <h4>Border Countries: </h4>
                     {borderCountries.length ? borderCountries.map(item => <StyledLink darkmode={`${darkmode}`} to={`/country/${item}`} key={item}>{item}</StyledLink>) : <p>There are not any border countries</p>}
                </Borders>
            </Details>
        </InfoWrapper>
     );
}
 
export default CountryInfo;