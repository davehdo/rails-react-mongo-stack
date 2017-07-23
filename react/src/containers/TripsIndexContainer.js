import React, { Component } from 'react';

class TripsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    }
  }

  render() {
    return (
      <div>
        <h2>hello from TripsIndexContainer</h2>
      </div>
    )
  }
}

export default TripsIndexContainer;
