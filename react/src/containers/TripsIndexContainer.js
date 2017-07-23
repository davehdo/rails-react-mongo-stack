import React, { Component } from 'react';

class TripsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/trips.json')
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({ trips: body })
    })
  }

  render() {
    console.log(this.state.trips)
    return (
      <div>
        <h2>hello from TripsIndexContainer</h2>
      </div>
    )
  }
}

export default TripsIndexContainer;
