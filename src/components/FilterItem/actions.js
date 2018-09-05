import { FILTER, UNFILTER } from "../../constants";
export const filter = name => ({
    type: FILTER,
    payload: name
});

export const unfilter = name => ({
    type: UNFILTER,
    payload: name
});