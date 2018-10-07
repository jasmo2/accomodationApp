import { APPLY_FILTERS, CLEAR_FILTER } from "../../constants";
import { applyFilters } from "../../utils/filters";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case APPLY_FILTERS: {
            const { filters, data } = action.payload;
            const newData = applyFilters(filters, data);
            return newData ? Object.assign({}, state, { accomodations: newData }) : null;
        }
        case CLEAR_FILTER: {
            return null;
        }
        default:
            return state;
    }
};
