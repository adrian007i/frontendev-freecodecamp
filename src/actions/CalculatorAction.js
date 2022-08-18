import {SET_FULL_EQUATION, SET_CURRENT_EQUATION} from "../constants";

export const currentEquation = (new_value)=> ({
    type:SET_CURRENT_EQUATION,
    value: new_value
});

export const fullEquation = (new_value)=> ({
    type:SET_FULL_EQUATION,
    value: new_value
});