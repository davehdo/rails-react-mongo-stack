import React, { Component } from 'react';
import TripTile from '../components/TripTile'

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
    this.addNewTrip = this.addNewTrip.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/trips.json', {
      credentials: 'include' //fulfills credential requirements for user session
    })
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

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      newName: '',
      newCity: '',
      newState: '',
      newDate: ''
    })
  };

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

  addNewTrip(formPayload) {
    fetch('/api/v1/trips', {
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(formPayload),
      credentials: 'include'
    })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData)
      this.setState({ trips: [...this.state.trips, responseData.trip] })

    // $.ajax({ url: '/api/v1/trips',
    //   type: 'POST',
    //   data: formPayload,
    //   success: (response) => {
    //     console.log(response)
    //     this.setState({ trips: [...this.state.trips, response.trip] })
    //   }
    // });
    })
  }

  render() {
    let trips = this.state.trips.map(trip => {
      return (
        <TripTile
          key={trip.id}
          trip={trip}
          handleTripDelete={this.handleTripDelete}
        />
      )
    })

    return (
      <div>
        <section id="banner">
          <div className="inner">
            <header>
              <h1>Hungry Travels</h1>
              <p>An app for traveling food lovers</p>
            </header>
            <a href="#main" className="more scrolly">Learn More</a>
          </div>
        </section>

        <div id="main" className="column">
          <div className="row">
            {trips}
          </div>
        </div>

        <div className="column form-container">
          <h3>Add a Trip</h3>
          <form onSubmit={this.handleFormSubmit}>
            <label onChange={this.handleChange}>Trip Name
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
      </div>
    )
  }
}

export default TripsIndexContainer;
