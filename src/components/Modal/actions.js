import { APPLY_FILTERS, SHOW_MODAL, HIDE_MODAL } from "../../constants";

/**
 * pass payload to modal reducer
 * @function showModal
 * @param {object} payload
 */
export const showModal = payload => ({
    type: SHOW_MODAL,
    payload
});

/**
 * based on different type of actions the modal is hide and dispatch another action
 * @function hideModal
 * @param {object} payload
 */
export const hideModal = payload => (
    dispatch => {
        const actions = [dispatch({ type: HIDE_MODAL })];
        if (
            payload &&
            (
                payload.filters.activities.size > 0 || payload.filters.location.size > 0
            )
        ) {
            actions.push(
                dispatch({ type: APPLY_FILTERS, payload })
            );
        }
        return actions;
    }
)