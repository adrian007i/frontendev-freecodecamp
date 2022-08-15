import {
    FETCH_QUOTE,
    NEW_QUOTE
} from "./constants";

export const quotesReducers = (state = { quotes: [], text: "", author: "" }, action) => {
    switch (action.type) {
        case FETCH_QUOTE:
            return { ...state, quotes: action.payload }
        case NEW_QUOTE:
            return {
                ...state,
                text: state.quotes[action.random_id].text,
                author: state.quotes[action.random_id].author
            }
        default:
            return state;
    }
} 