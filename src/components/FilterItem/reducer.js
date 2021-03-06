import { FILTER, UNFILTER, CLEAR_FILTER } from "../../constants";

const INITIAL_STATE = {
    location: new Set(),
    activities: new Set()
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLEAR_FILTER: {
            return {
                location: new Set(),
                activities: new Set()
            };

        }
        case FILTER: {
            const { type, item } = action.payload;
            state[type].add(item)
            return Object.assign({}, state);
        }
        case UNFILTER: {
            const { type, item } = action.payload;
            state[type].delete(item)
            return Object.assign({}, state);
        }
        default:
            break;
    }
    return state;
};
