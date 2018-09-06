import { FILTER, UNFILTER, CLEAR_FILTER } from "../../constants";
export const filter = payload => ({
    type: FILTER,
    payload: payload
});

export const unfilter = payload => ({
    type: UNFILTER,
    payload: payload
});

export const clearFilter = () => ({
    type: CLEAR_FILTER
});