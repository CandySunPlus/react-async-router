import React from 'react';
import {Link} from 'react-router';

const {Component} = React;
/**
 * About App
 */
export default class About extends Component {
  render() {
    return (
      <div>
        <h3>react-async-router demo</h3>
        <p>
          webpack + bundle-loader + react-router
        </p>
        <Link to="home">back to home</Link>
      </div>
    );
  }
}
