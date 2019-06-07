import { createSelector } from 'reselect';
import { get, shuffle } from 'lodash';
import { DICTATION_LIST_STORE_KEY } from './dictation-list-constants';

const getDictationStore = store => store[DICTATION_LIST_STORE_KEY];
const getRouteNameFromOwnProps = (store, ownProps) => get(ownProps, 'match.params.name');

export const getDictationDataByRoute = createSelector(
  getDictationStore,
  getRouteNameFromOwnProps,
  (dictationStore, pageName) => ({
    header: get(dictationStore, [pageName, 'label'], ''),
    questionsList: shuffle(
      get(dictationStore, [pageName, 'questionsList'], [])
    ),
  })
);

