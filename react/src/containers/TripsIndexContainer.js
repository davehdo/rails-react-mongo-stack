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
        <h4>Name of Trip</h4>
        <h3>add a trip</h3>
        <form>
          <label>name of trip
            <input
              name=''
              type='text'
            />
          </label>

          <label>City
            <input
              name=''
              type='text'
            />
          </label>

          <label>State
            <input
              name=''
              type='text'
            />
          </label>
          
          <label>Date
            <input
              name=''
              type='text'
            />
          </label>

          <div className="button-group">
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default TripsIndexContainer;
