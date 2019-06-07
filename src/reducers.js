import { createStore, combineReducers } from 'redux';
import { sidebarReducer, SIDEBAR_STORE_KEY } from './modules/sidebar';
import { dictationListReducer, DICTATION_LIST_STORE_KEY } from './modules/dictation-list';

const reducers = {
  [SIDEBAR_STORE_KEY]: sidebarReducer,
  [DICTATION_LIST_STORE_KEY]: dictationListReducer,
};

export const store = createStore(
  combineReducers(reducers)
);