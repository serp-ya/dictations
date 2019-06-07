import { map, omit } from 'lodash';
import { vectors } from './vectors';
import { linearSpaces } from './linear-spaces';

export const dictationList = {
  [vectors.href]: vectors,
  [linearSpaces.href]: linearSpaces,
};
export const dictationThemesList = map(dictationList, dictation => (
  omit(dictation, 'questionsList')
));
