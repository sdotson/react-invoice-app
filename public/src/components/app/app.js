import React, { Component } from 'react';
import Nav from '../nav/nav';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
