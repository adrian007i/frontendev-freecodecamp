import {KEY_PRESS} from "../constants";

export const keyPressed = (raw)=> ({
    type:KEY_PRESS,
    value: raw
});