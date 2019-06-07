import * as React from 'react';
import { connect } from 'react-redux'
import { ListGroup  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { SidebarPropTypes } from './sidebar-proptypes';
import { getSidebarLinksList } from './sidebar-selectors';
import { TO_MAIN_PAGE_LABEL } from './sidebar-constants';

class SidebarComponent extends React.PureComponent {
  static propTypes = SidebarPropTypes;
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>
          <Link to="/">
            {TO_MAIN_PAGE_LABEL}
          </Link>
        </ListGroup.Item>

        {this.props.linksList.map(link => (
          <ListGroup.Item key={link.name}>
            <Link to={`/${link.href}`}>
              {link.label}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  linksList: getSidebarLinksList,
});

export const SidebarController = connect(
  mapStateToProps
)(SidebarComponent);
