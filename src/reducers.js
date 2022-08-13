import {
    FETCH_QUOTE,
    NEW_QUOTE
} from "./constants";

export const quotesReducers = (state = { quotes: [], text: "", author: "" }, action) => {
    switch (action.type) {
        case FETCH_QUOTE:
            return { ...state, quotes: action.payload.text }
        case NEW_QUOTE:
            return { ...state, text: action.payload.author }
        default:
            return state;
    }
} 