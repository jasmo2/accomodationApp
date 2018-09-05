import { APPLY_FILTERS } from "../../constants";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case APPLY_FILTERS: {
            const { filters, data } = action.payload;
            let accomodations = null;
            debugger
            return Object.assign({}, state);
        }
        default:
            return state;
    }
};
