import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container, Row, Col } from 'react-bootstrap';
import { getDictationDataByRoute } from './dictation-list-selectors';
import { DictationListPropTypes } from './dictation-list-proptypes';

class DictationListComponent extends React.PureComponent {
  static propTypes = DictationListPropTypes;
  
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>{ this.props.dictationData.header }</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ol>
              {
                this.props.dictationData.questionsList.length === 0
                  ? 'Почему то нет данных'
                  : this.props.dictationData.questionsList.map(question => (
                    <li key={question}>
                      { question }
                    </li>
                  ))
                }
            </ol>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dictationData: getDictationDataByRoute,
});

export const DictationListController = connect(
  mapStateToProps
)(DictationListComponent);
