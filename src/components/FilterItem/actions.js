import { FILTER, UNFILTER, CLEAR_FILTER } from "../../constants";

/**
 * recieve filter as payload
 *  @param {object} payload
 */
export const filter = payload => ({
    type: FILTER,
    payload: payload
});

/**
 * recieve filter as payload
 *  @param {object} payload
 */
export const unfilter = payload => ({
    type: UNFILTER,
    payload: payload
});

export const clearFilter = () => ({
    type: CLEAR_FILTER
});