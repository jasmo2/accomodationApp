import { GET_DATA } from '../../constants';

const INITIAL_STATE = { accomodations: [] };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DATA: {
            debugger
            return { data: action.payload.accomodations };
        }
        default:
            return state;
    }
};
