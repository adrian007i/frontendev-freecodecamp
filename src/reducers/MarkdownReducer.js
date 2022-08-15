import {KEY_PRESS} from "../constants";

export const markdownReducer = (state = "", action) => {
    switch (action.type) {
        case KEY_PRESS:
            return action.value
        default:
            return state;
    }
} 