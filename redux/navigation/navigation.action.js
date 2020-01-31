export const setNavigationView = page => {
  return {
    type: "SET_PAGE",
    payload: page
  };
};

export const setHamburgerState = state => {
  return {
    type: "SET_HAMBURGER",
    payload: state
  };
};