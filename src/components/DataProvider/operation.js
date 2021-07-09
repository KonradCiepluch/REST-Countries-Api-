import { requestData, getData, getDataFailed } from "./actions";

const url = 'https://restcountries.eu/rest/v2/all';

export const getAllData = () => {
    return dispatch => {
        dispatch(requestData());

        setTimeout(() => {
            fetch(url)
            .then(response => response.json())
            .then(data => dispatch(getData(data)))
            .catch(error => dispatch(getDataFailed(error)))
        }, 1000);
    }
};

/* const fetchCountries = async () => {
    const response = await fetch(url);
    const json = await response.json();

    return json
}

export const getAllDat = () => async (dispatch) => {
        const countries = await fetchCountries()
        console.log(countries)
    } */