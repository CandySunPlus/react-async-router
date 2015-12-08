import React from 'react';

const {Component} = React;

export default class Message extends Component {
  render() {
    return (
      <div>
        <h3>achive message</h3>
        <p>{this.props.params.id}</p>
      </div>
    );
  }
}
