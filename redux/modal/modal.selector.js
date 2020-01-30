import { createSelector } from 'reselect';

const selectModal = state => state.modalState;

export const selectModalImg = createSelector(
  [selectModal],
  modalState => modalState.url
);

export const selectModalDisplay = createSelector(
  [selectModal],
  modalState => modalState.display
);