import {
    FETCH_QUOTE,
    NEW_QUOTE
} from "./constants";

export const fetchQuotes = () => (dispatch) => {

    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => dispatch({ type: FETCH_QUOTE, payload: data }))
        .then(data => dispatch({ type: NEW_QUOTE, random_id: rand()}))
        .catch(error => dispatch({ type: FETCH_QUOTE, payload: error }))
}

export const selectQuote = () => ({
    type: NEW_QUOTE,
    random_id: rand()
});


const rand = () => Math.floor(Math.random() * 1000);


