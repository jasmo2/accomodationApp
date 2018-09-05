import { FILTER, UNFILTER } from "../../constants";

const INITIAL_STATE = new Set();

export default (state = INITIAL_STATE, action) => {
    const newState = Array.isArray(state) ? new Set(state) : state;
    switch (action.type) {
        case FILTER: {
            newState.add(action.payload)
            break;
        }
        case UNFILTER: {
            newState.delete(action.payload)
            break;
        }

        default:
            break;
    }
    return newState;
};
