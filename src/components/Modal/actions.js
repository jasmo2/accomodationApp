import { APPLY_FILTERS, SHOW_MODAL, HIDE_MODAL } from "../../constants";
export const showModal = payload => ({
    type: SHOW_MODAL,
    payload
});

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