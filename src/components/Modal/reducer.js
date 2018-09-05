import { SHOW_MODAL, HIDE_MODAL } from "../../constants";

const INITIAL_STATE = { modalClass: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      const { data, type } = action.payload;
      return Object.assign({}, state, { modalClass: true, data, type });
    }
    case HIDE_MODAL:
      return Object.assign({}, state, { modalClass: false });
    default:
      return state;
  }
};
