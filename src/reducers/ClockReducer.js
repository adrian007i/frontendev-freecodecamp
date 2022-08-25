import { SET_BREAK, SET_SESSION, SET_CURRENT, SET_BREAK_TYPE, SET_SESSION_TYPE, SET_PLAY, RESET_STATE } from "../constants";

const currentState = {
    break: 5,
    session: 25,
    type: "Session",
    current: 25 * 60,
    play: false
}

export const clockReducer = (state = currentState, action) => {
    switch (action.type) {
        case SET_BREAK:
            return { ...state, break: action.value };
        case SET_PLAY:
            return { ...state, play: !(state.play) };
        case SET_SESSION:
            return { ...state, session: action.value };
        case SET_CURRENT:
            return { ...state, current: state.current - 1 };
        case SET_BREAK_TYPE:
            return {
                ...state,
                type: "Break",
                current: state.break * 60
            }
        case SET_SESSION_TYPE:
            return {
                ...state,
                type: "Session",
                current: state.session * 60
            }
        case RESET_STATE:
            return {
                break: 5,
                session: 25,
                type: "Session",
                current: 25 * 60,
                play: false
            }
        default:
            return state;
    }
} 