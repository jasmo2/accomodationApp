import { APPLY_FILTERS } from "../../constants";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case APPLY_FILTERS: {
            const { filters, data } = action.payload;
            const filtered = new Set();
            const filteredData = [];
            filters.forEach(filter => {

            });

            debugger
            return Object.assign({}, state);
        }
        default:
            return state;
    }
};
