export const setModalImg = url => {
  return {
    type: "SET_IMG",
    payload: url
  };
};

export const setModalDisplay = display => {
  return {
    type: "SET_DISPLAY",
    payload: display
  };
};