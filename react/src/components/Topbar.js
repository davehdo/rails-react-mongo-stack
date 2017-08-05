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
          <i className="fa fa-home" aria-hidden="true"></i>
          <div className="top-bar-left">
            <ul className="menu">
              <li><Link to="/">Hungry Travels</Link></li>
            </ul>
          </div>

          <i className="fa fa-bars" aria-hidden="true"></i>
          <div className="top-bar-right">
            <ul className="menu">
              <li><a data-method="delete" href="/users/sign_out">Sign Out</a></li>
              <li><a href="/users/edit">Edit Profile</a></li>
            </ul>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Topbar;
