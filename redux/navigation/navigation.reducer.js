const INITIAL_STATE = {
  view: "HOME"
}

const NavigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return ({
        ...state,
        view: action.payload
      });
    default:
      return state;
  }
}

export default NavigationReducer;