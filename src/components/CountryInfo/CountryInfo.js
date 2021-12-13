import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import {
  InfoWrapper,
  Back,
  Details,
  FlagWrapper,
  DetailsWrapper,
  Borders,
  StyledLink,
} from "./CountryInfo.styles";

const CountryInfo = ({ darkmode }) => {
  const { name } = useParams();

  const country = useSelector((state) =>
    state.countries.find((country) => country.name.official === name)
  );

  let allCurrencies = "";

  const countries = useSelector((state) => state.countries);

  const {
    name: { official: countryName, nativeName },
    population,
    region,
    subRegion,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    flags,
    borders,
  } = country;

  const getBorderCountries = () => {
    const borderCountries = [];
    if (borders) {
      for (let i = 0; i < borders.length; i++) {
        const country = countries.find((item) => item.cca3 === borders[i]);
        borderCountries.push(country.name.official);
      }
    }
    return borderCountries;
  };

  const borderCountries = getBorderCountries();

  for (const property in currencies) {
    allCurrencies += currencies[property].name;
  }

  return (
    <InfoWrapper darkmode={darkmode}>
      <Back darkmode={`${darkmode}`} to="/">
        <i className="fas fa-long-arrow-alt-left"></i>Back
      </Back>
      <FlagWrapper darkmode={darkmode}>
        <img src={flags.svg} alt="flag" />
      </FlagWrapper>
      <Details darkmode={darkmode}>
        <h3>{countryName}</h3>
        <DetailsWrapper>
          <p>
            <span>Native Name: </span> {Object.values(nativeName)[0].official}
          </p>
          <p>
            <span>Population: </span>
            {population}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Sub Region: </span>
            {subRegion || subregion}
          </p>
          <p>
            <span>Capital: </span>
            {capital[0]}
          </p>
          <p>
            <span>Top Level Domain: </span>
            {tld[0]}
          </p>
          <p>
            <span>Currencies: </span>
            {allCurrencies}
          </p>
          <p>
            <span>Languages: </span>
            {Object.values(languages).join(", ")}
          </p>
        </DetailsWrapper>
        <Borders>
          <h4>Border Countries: </h4>
          {borderCountries.length ? (
            borderCountries.map((item) => (
              <StyledLink
                darkmode={`${darkmode}`}
                to={`/country/${item}`}
                key={item}
              >
                {item}
              </StyledLink>
            ))
          ) : (
            <p>There are not any border countries</p>
          )}
        </Borders>
      </Details>
    </InfoWrapper>
  );
};

export default CountryInfo;
