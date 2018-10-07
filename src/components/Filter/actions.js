import { APPLY_FILTERS } from "../../constants";

/**
 * Call filters reducer
 *  @function {} applyFilters
 *
 * recieve filters as payload
 *  @param {object} filters
 */
export const applyFilters = filters => ({
    type: APPLY_FILTERS,
    payload: filters
});