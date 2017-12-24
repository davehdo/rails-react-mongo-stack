import React, { Component } from 'react';
import TripTile from '../components/TripTile';
import NewTripFormContainer from './NewTripFormContainer';
import Footer from '../components/Footer';


class TripsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    }
    this.getUser = this.getUser.bind(this)
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
    this.getUser()
  }

  getUser() {
    // fetch('/api/v1/users', {
    //   credentials: 'include' //fulfills credential requirements for user session
    // })
    // .then(response => {
    //   return response.json()
    // })
    // .then(body => {
    //   this.setState({ user: body.user })
    // })
  }

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
      this.setState({ trips: [...this.state.trips, responseData.trip] })
    })
  }

  render() {

    let trips = this.state.trips.map(trip => {
      return (
        <TripTile
          key={trip.id}
          id={trip.id}
          city={trip.city}
        />
      )
    })

    return (
      <div>

        <section id="banner">
          <div className="inner">
            <header>
              <h1>Rails React Stack</h1>
              <p>An app for traveling food lovers</p>
            </header>
            <a href="#main" className="more scrolly">Get Started</a>
          </div>
        </section>

        <div id="main" className="column">
          <div className="row">
            {trips}
          </div>
        </div>

        <div className="column form-container">
          <div className="row small-12 medium-8">
            <h3>Where are you traveling?</h3>
            <NewTripFormContainer
              addNewTrip={this.addNewTrip}
            />
          </div>
        </div>


        <div className="column footer">
          <Footer />
        </div>


      </div>
    )
  }
}

export default TripsIndexContainer;
