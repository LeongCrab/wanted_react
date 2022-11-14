const ADD_BOOKMARK = "bookmark/ADD_BOOKMARK";
const REMOVE_BOOKMARK = "bookmark/REMOVE_BOOKMARK";

const initialState = {
  bookmarkList: []
};

export default function bookmark(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarkList: state.bookmarkList.concat(action.id)
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarkList: state.bookmarkList.filter(id => id !== action.id)
      };
    default:
      return state;
  }
}