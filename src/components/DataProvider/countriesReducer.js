import { REQUEST_DATA, GET_DATA, GET_DATA_FAILED, FILTER_DATA, SEARCH_COUNTRIES, SHOW_ALL } from "./actions";

const initialState = {
    isLoading: false,
    isError: false,
    error: '',
    countries: [],
    filtered: [],
    searched: [],
}

export const countriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_DATA:
            return {...state, isLoading: true};
        case GET_DATA:
            return {...state, isLoading: false, countries: action.data}
        case GET_DATA_FAILED:
            return {...state, isLoading: false, isError: true, error:action.error}
        case FILTER_DATA:
            let filteredCountries = [...state.countries];
            filteredCountries = filteredCountries.filter(country => country.region.toLowerCase() === action.region.toLowerCase());
            return {...state, filtered: filteredCountries, searched: []}
        case SEARCH_COUNTRIES: 
            let searched  = [...state.countries];
            searched = searched.filter(item => item.name.toLowerCase().includes(action.phrase));
            return {...state, filtered: [], searched}
        case SHOW_ALL:
            return {...state, filtered: [], searched: []}
        default:
            return state;
    }
}
