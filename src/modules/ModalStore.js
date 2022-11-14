import React, { useReducer, createContext } from 'react';

export const ModalContext = createContext(null);

const initialStates = {
  modalOpen: 0,
  searchOpen: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_OPEN":
      return {...state, modalOpen: 1};
    case "JOIN_OPEN":
      return {...state, modalOpen: 2};
    case "MODAL_CLOSE":
      return {...state, modalOpen: 0};
    case "SEARCH_MODAL_OPEN":
      return {...state, searchOpen: true};
    case "SEARCH_MODAL_CLOSE":
      return {...state, searchOpen: false};
    default:
      return state;
  }
};

const ModalStore = (props) => {
  const [state, contextDispatch] = useReducer(reducer, initialStates);

    return (
      <ModalContext.Provider value={{modalOpen : state.modalOpen, searchOpen: state.searchOpen, contextDispatch}}>{props.children}</ModalContext.Provider>
    );
};

export default ModalStore;