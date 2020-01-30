const INITIAL_STATE = {
  url: "",
  display: "none"
}

const ModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IMG':
      return ({
        ...state,
        url: action.payload
      });
    case 'SET_DISPLAY':
      return ({
        ...state,
        display: action.payload
      });
    default:
      return state;
  }
}

export default ModalReducer;