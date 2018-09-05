import { APPLY_FILTERS } from "../../constants";
import { applyFilters } from "../../utils/filters";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case APPLY_FILTERS: {
            const { filters, data } = action.payload;
            const newData = applyFilters(filters, data);


            return Object.assign({}, state, newData);
        }
        default:
            return state;
    }
};
