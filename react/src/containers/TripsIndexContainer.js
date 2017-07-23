import React, { Component } from 'react';
import { Link } from 'react-router';

class TripsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      newName: '',
      newCity: '',
      newState: '',
      newDate: ''
    }
  this.handleChange = this.handleChange.bind(this)
  this.handleClearForm = this.handleClearForm.bind(this)
  this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/trips.json')
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({ trips: body.trips })
    })
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value })
  }

  addNewTrip(formPayload) {
    // fetch('/api/v1/trips', {
    //   method: 'POST',
    //   body: JSON.stringify(formPayload)
    // })
    // .then(response => response.json())
    // .then(responseData => {
    //   this.setState({ trips: [...this.state.trips, responseData.trips] })
    // })

    $.ajax({ url: '/api/v1/trips',
      type: 'POST',
      data: formPayload,
      success: (response) => {
        let responseData = JSON.parse(response)
        this.setState({ trips: [...this.state.trips, responseData.trips] })
      }
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      name: this.state.newName,
      city: this.state.newCity,
      state: this.state.newState
    };
    this.addNewTrip(formPayload);
    this.handleClearForm(event);
  };

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      newName: '',
      newCity: '',
      newState: '',
      newDate: ''
    })
  };

  render() {
    console.log(this.state.trips)

    return (
      <div>

      {this.state.trips.map(trip => {
        return (
          <div>
            <Link key={trip.id} to={`/trips/${trip.id}`}>{trip.name}</Link>
          </div>
        )
      })}


        <h3>add a trip</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label onChange={this.handleChange}>Name of Trip
            <input
              name='newName'
              type='text'
              value={this.state.newName}
            />
          </label>

          <label onChange={this.handleChange}>City
            <input
              name='newCity'
              type='text'
              value={this.state.newCity}
            />
          </label>

          <label onChange={this.handleChange}>State
            <input
              name='newState'
              type='text'
              value={this.state.newState}
            />
          </label>

          <label onChange={this.handleChange}>Date
            <input
              name='newDate'
              type='text'
              value={this.state.newDate}
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
