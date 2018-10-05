import { GET_DATA } from "../../constants";

const INITIAL_STATE = { accomodations: [] };

/**
 * @function {reducer}
 *  @param {state} object
 *  @param {action} payload
 */

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DATA: {
            return { data: action.payload };
        }
        default:
            return state;
    }
};
