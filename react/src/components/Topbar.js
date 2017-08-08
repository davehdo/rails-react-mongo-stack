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
          <div className="top-bar-left">
            <Link to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
            <ul className="menu">
            </ul>
          </div>



          <div className="top-bar-right">
            <div className="dropdown">
              <i className="fa fa-bars" aria-hidden="true"></i>
              <div className="dropdown-content">
                <a data-method="delete" href="/users/sign_out">Sign Out</a>
                <a href="/users/edit">Edit Profile</a>

              </div>
            </div>

          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Topbar;
