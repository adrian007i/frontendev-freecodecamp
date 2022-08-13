import {
    FETCH_QUOTE,
    NEW_QUOTE
} from "./constants";

export const fetchQuotes = () => (dispatch)=>{

    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => dispatch({type: FETCH_QUOTE, payload : data}))
        .catch(error => dispatch({type: FETCH_QUOTE, payload: error}))
}


