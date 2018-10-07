import { GET_DATA, ACCOMODATIONS_API } from "../../constants";

/**
 *
 *  @function {} getData
 *      Makes a call from the fetch API to a 3º party code base
 *
 *  @callback {} fetch
 */

export const getData = (dispatch) => (
    dispatch => {
        fetch(ACCOMODATIONS_API)
            .then(response => {
                return response.json();
            })
            .then(accomodations => dispatch(getDataReducer(accomodations)));
    }
);

/**
 *
 *  @function getDataReducer
 *      Call the reducer
 *  @param payload
 */
const getDataReducer = payload => ({
    type: GET_DATA,
    payload
});
