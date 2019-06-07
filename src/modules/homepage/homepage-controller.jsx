import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MAIN_TITLE, MAIN_DESCRIPTION } from './homepage-constants';

export class HomepageController extends React.PureComponent {
  render () {
    return (
    <Container>
      <Row>
        <Col>
          <h1>{ MAIN_TITLE }</h1>
          <p>{ MAIN_DESCRIPTION }</p>
        </Col>
      </Row>
    </Container>
    );
  }
}
