import { REQUEST_DATA, GET_DATA, GET_DATA_FAILED, FILTER_DATA, FILTER_SEARCHED,SEARCH_COUNTRIES, SHOW_ALL } from "./actions";

const initialState = {
    isLoading: false,
    isError: false,
    error: '',
    countries: [],
    filtered: [],
    searchedFiltered: [],
    searched: [],
    noMatches: false,
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
            return {...state, filtered: filteredCountries, searched: [], noMatches: false}
        case FILTER_SEARCHED:
            let filteredSearched = [...state.searched];
            filteredSearched = filteredSearched.filter(country => country.region.toLowerCase() === action.region.toLowerCase());
            return {...state, filtered: [], searchedFiltered: filteredSearched, noMatches: !filteredSearched.length && true}
        case SEARCH_COUNTRIES: 
            let searched  = [...state.countries];
            searched = searched.filter(item => item.name.toLowerCase().includes(action.phrase));
            return {...state, filtered: [], searched, searchedFiltered: [], noMatches: !searched.length && true}
        case SHOW_ALL:
            return {...state, filtered: [], searchedFiltered: [], searched: [], noMatches: false}
        default:
            return state;
    }
}
