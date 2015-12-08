import React from 'react';
import {Link} from 'react-router';

const {Component} = React;

/**
 * home
 */
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <ul>
          <li><Link to="about">#about</Link></li>
          <li><Link to="inbox">#inbox</Link></li>
          <li><Link to="achive" params={{id:1}}>#achive message</Link></li>
        </ul>
      </div>
    );
  }
}
