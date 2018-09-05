import { FILTER, UNFILTER } from "../../constants";

const INITIAL_STATE = {
    location: new Set(),
    activities: new Set()
};

export default (state = INITIAL_STATE, action) => {
    const newState = INITIAL_STATE;
    switch (action.type) {
        case FILTER: {
            const { type, item } = action.payload;
            newState[type].add(item)
            break;
        }
        case UNFILTER: {
            const { type, item } = action.payload;
            newState[type].delete(item)
            break;
        }

        default:
            break;
    }
    return newState;
};
