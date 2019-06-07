import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Sidebar } from './modules/sidebar';
import { Homepage } from './modules/homepage';
import { DictationList } from './modules/dictation-list';

export class App extends React.PureComponent {
  render() {
    return (
      <Container fluid>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Row>
            <Col xs={2}>
              <Sidebar />
            </Col>
            <Col>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/:name" component={DictationList} />
            </Switch>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    );
  }
}
