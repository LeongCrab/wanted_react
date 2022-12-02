const LOGIN_OPEN = "LOGIN_OPEN";
const JOIN_OPEN = "JOIN_OPEN";
const MODAL_CLOSE = "MODAL_CLOSE";
const SEARCH_MODAL_OPEN = "SEARCH_MODAL_OPEN";
const SEARCH_MODAL_CLOSE = "SEARCH_MODAL_CLOSE";

const initialStates = {
  modalOpen: 0,
  searchOpen: false
};

export default function login(state = initialStates, action) {
  switch (action.type) {
    case LOGIN_OPEN:
      return { ...state, modalOpen: 1 };
    case JOIN_OPEN:
      return { ...state, modalOpen: 2 };
    case MODAL_CLOSE:
      return { ...state, modalOpen: 0 };
    case SEARCH_MODAL_OPEN:
      return { ...state, searchOpen: true };
    case SEARCH_MODAL_CLOSE:
      return { ...state, searchOpen: false };
    default:
      return state;
  }
}