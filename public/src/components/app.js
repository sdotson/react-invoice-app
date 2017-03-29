import React, { Component } from 'react';

import Nav from './nav';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header path={this.props.location.pathname} />
        {this.props.children}
      </div>
    );
  }
}
