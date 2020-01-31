const INITIAL_STATE = {
  view: "HOME",
  hamburger: "none"
}

const NavigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return ({
        ...state,
        view: action.payload
      });
    case 'SET_HAMBURGER':
      return ({
        ...state,
        hamburger: action.payload
      });
    default:
      return state;
  }
}

export default NavigationReducer;