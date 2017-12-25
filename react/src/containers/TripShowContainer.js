import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import RestaurantTile from '../components/RestaurantTile';
import SuggestedTile from '../components/SuggestedTile';
import SearchResultTile from '../components/SearchResultTile';
import Footer from '../components/Footer';

class TripShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {}
    }

    this.getTripDetails = this.getTripDetails.bind(this);
  }

  componentDidMount() {
    this.getTripDetails()
  }

  getTripDetails() {
    let tripId = this.props.params.id
    fetch(`/api/v1/trips/${tripId}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        trip: body.trip,
        restaurants: body.restaurants
      }, this.loadMap)
    })
  }

  render() {
    return (
      <div>

        <div className="trip-title">
          <h1>{this.state.trip.city}, {this.state.trip.state}</h1>
          <p> {this.state.trip.start_date}</p>
          <Link className="delete" data-confirm="Are you sure?" onClick={this.handleTripDelete}>Delete Trip</Link>
        </div>
        <p>Here is some interesting trip information</p>
      
        <div className="column footer">
          <div className="row">
            <Footer />
          </div>
        </div>

      </div>
    )
  }
}

export default TripShowContainer;
