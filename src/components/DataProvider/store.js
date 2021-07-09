import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { countriesReducer } from "./countriesReducer";

const store = createStore(countriesReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;