export const REQUEST_DATA = "REQUEST_DATA";
export const GET_DATA = "GET_DATA";
export const GET_DATA_FAILED = "GET_DATA_FAILED";
export const FILTER_DATA = "FILTER_DATA";
export const FILTER_SEARCHED = "FILTER_SEARCHED";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const SHOW_ALL = "SHOW_ALL";

export const requestData = () => ({
  type: REQUEST_DATA,
});
export const getData = (data) => ({
  type: GET_DATA,
  data,
});

export const getDataFailed = (error) => ({
  type: GET_DATA_FAILED,
  error,
});

export const filterData = (region) => ({
  type: FILTER_DATA,
  region,
});

export const filterSearched = (region) => ({
  type: FILTER_SEARCHED,
  region,
});

export const searchCountries = (phrase) => ({
  type: SEARCH_COUNTRIES,
  phrase: phrase.toLowerCase(),
});

export const showAll = () => ({
  type: SHOW_ALL,
});

const url = "https://restcountries.com/v3.1/all";

export const getAllData = () => {
  return (dispatch) => {
    dispatch(requestData());

    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => dispatch(getData(data)))
        .catch((error) => dispatch(getDataFailed(error)));
    }, 2000);
  };
};
