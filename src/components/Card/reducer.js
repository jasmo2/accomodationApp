import { SAVE_LIKES, UNSAVE_LIKES } from "../../constants";

const INITIAL_STATE = new Set();

export default (state = INITIAL_STATE, action) => {
    const newState = Array.isArray(state) ? new Set(state) : state;
    switch (action.type) {
        case SAVE_LIKES: {
            newState.add(action.payload);
            break;
        }
        case UNSAVE_LIKES: {
            newState.delete(action.payload);
            break;
        }
        default:
            break;
    }
    return newState;
};
