import React, { Component } from 'react';
import './style.css'

export default class Name extends Component {
  render() {
    const name = this.props.name;
    return (
      <h6 className="product_name">
        {name}
      </h6>
    );
  }
}