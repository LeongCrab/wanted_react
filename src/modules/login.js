const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

export const logIn = (email) => ({
  type: LOG_IN,
  email
});

export const logOut = () => ({
  type: LOG_OUT
});

const initialState = {
  email: null,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        email: action.email,
      };
    case LOG_OUT:
      return {
        ...state,
        email: null,
      };
    default:
      return state;
  }
}