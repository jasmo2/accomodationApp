import { FILTER, UNFILTER } from "../../constants";
export const filter = payload => ({
    type: FILTER,
    payload: payload
});

export const unfilter = payload => ({
    type: UNFILTER,
    payload: payload
});