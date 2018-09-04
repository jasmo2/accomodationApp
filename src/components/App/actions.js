import { GET_DATA, ACCOMODATIONS_API } from '../../constants';

export const getData = (dispatch) => (
    dispatch => {
        fetch(ACCOMODATIONS_API)
            .then(response => {
                return response.json();
            })
            .then(accomodations => dispatch(getDataReducer(accomodations)));
    }
);

const getDataReducer = payload => ({
    type: GET_DATA,
    payload
});
