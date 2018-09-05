import { APPLY_FILTERS, SHOW_MODAL, HIDE_MODAL } from "../../constants";
export const showModal = payload => ({
    type: SHOW_MODAL,
    payload
});

export const hideModal = payload => {
    return dispatch => [
        dispatch({ type: HIDE_MODAL }),
        dispatch({ type: APPLY_FILTERS, payload })
    ]
}
