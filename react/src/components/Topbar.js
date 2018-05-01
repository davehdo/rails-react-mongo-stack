import React, { Component } from 'react';
import { Link } from 'react-router';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  render() {
    return (
      <div>
        <div className="top-bar">
          This is React-generated and common to all pages
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Topbar;
