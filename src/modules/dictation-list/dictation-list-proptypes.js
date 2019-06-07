import PropTypes from 'prop-types';

const DictationData = PropTypes.shape({
  header: PropTypes.string.isRequired,
  questionsList: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ),
});

export const DictationListPropTypes = {
  dictationData: DictationData,
}