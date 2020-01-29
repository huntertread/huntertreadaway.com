import { createSelector } from 'reselect';

const selectModal = state => state.modalImg;

export const selectModalImg = createSelector(
  [selectModal],
  modalImg => modalImg.url
);