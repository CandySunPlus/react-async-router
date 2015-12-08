import React from 'react';
import {RouteHandler} from 'react-router';

const {Component} = React;


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React-router is awesome!</h1>
        <RouteHandler/>
      </div>
    );
  }
}
