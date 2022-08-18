import { SET_CURRENT_EQUATION, SET_FULL_EQUATION } from "../constants";

export const calculatorReducer = (state = {current: "0", full: 0}, action) => {
    switch (action.type) {
        case SET_CURRENT_EQUATION:
            return {...state , current: action.value};
        case SET_FULL_EQUATION:
            return {...state , full: action.value};
        default:
            return state;
    }
} 