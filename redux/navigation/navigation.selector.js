import { createSelector } from 'reselect';

const selectNavigation = state => state.navigationView;

export const selectNavigationView = createSelector(
  [selectNavigation],
  navigationView => navigationView.view
);