const ADD_BOOKMARK = "ADD_BOOKMARK";
const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

export const addBookmark = (item) => ({
  type: ADD_BOOKMARK,
  item
});

export const removeBookmark = (item) => ({
  type: REMOVE_BOOKMARK,
  item
});

const initialState = {
  bookmarkList: []
};

export default function bookmark(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarkList: state.bookmarkList.concat(action.item)
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarkList: state.bookmarkList.filter(item => item !== action.item)
      };
    default:
      return state;
  }
}