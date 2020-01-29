const INITIAL_STATE = {
  url: ""
}

const ModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IMG':
      return ({
        ...state,
        url: action.payload
      });
    default:
      return state;
  }
}

export default ModalReducer;