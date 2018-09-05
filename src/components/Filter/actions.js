import { APPLY_FILTERS } from "../../constants";
export const applyFilters = filters => ({
    type: APPLY_FILTERS,
    payload: filters
});