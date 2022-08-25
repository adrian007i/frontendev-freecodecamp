import { SET_BREAK, SET_SESSION, SET_CURRENT, SET_BREAK_TYPE, SET_SESSION_TYPE, SET_PLAY, RESET_STATE } from "../constants";

export const breakTime = (new_value) => ({
    type: SET_BREAK,
    value: new_value
});

export const sessionTime = (new_value) => ({
    type: SET_SESSION,
    value: new_value
});

export const sessionType = () => ({
    type: SET_SESSION_TYPE
});
export const breakType = () => ({
    type: SET_BREAK_TYPE
});

export const current = () => ({
    type: SET_CURRENT,
});
 
export const play = () => ({
    type: SET_PLAY
});

export const reset = () => ({
    type: RESET_STATE
});



// crystal report for damages
// by depo
// display dmg by depo
// ax oc dmages quantity revenue
// dmg quantiy by depo in same report