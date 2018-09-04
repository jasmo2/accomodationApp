import { SHOW_MODAL, HIDE_MODAL } from '../../constants';

const INITIAL_STATE = { modalClass: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return Object.assign({}, state, { modalClass: true });
    case HIDE_MODAL:
      return Object.assign({}, state, { number: 0 });
    default:
      return state;
  }
};
