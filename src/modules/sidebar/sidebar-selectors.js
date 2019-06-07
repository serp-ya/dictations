import { createSelector } from 'reselect';
import { get } from 'lodash';
import { SIDEBAR_STORE_KEY } from './sidebar-constants';

const getSidebarStore = store => store[SIDEBAR_STORE_KEY];

export const getSidebarLinksList = createSelector(
  getSidebarStore,
  (sidebarState) => get(sidebarState, 'linksList', [])
);
