import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import RestaurantTile from '../components/RestaurantTile';
import SuggestedTile from '../components/SuggestedTile';

class TripShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {},
      restaurants: [],
      suggested: [],
      yelpData: []
    }
    this.handleRestaurantDelete = this.handleRestaurantDelete.bind(this);
    this.handleTripDelete = this.handleTripDelete.bind(this);
  }

  componentDidMount() {
    let payload = {
      location: {
        city: "Boston",
        state: "MA"
      }
    }

    fetch(`/yelp`,
      {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    )
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData)
      this.setState({ yelpData: responseData })
    })

    // let tripId = this.props.params.id
    // fetch(`/api/v1/trips/${tripId}`)
    // .then(response => response.json())
    // .then(body => {
    //   this.setState({
    //     trip: body.trip,
    //     restaurants: body.restaurants
    //     // suggested: body.businesses
    //   })
    // })
  }

  handleRestaurantDelete() {
    console.log('in handle delete')
  }

  handleTripDelete() {
    let tripId = this.props.params.id
    fetch(`/api/v1/trips/${tripId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(body => {
      this.props.router.push('/')
    })
  }

  render() {
    let restaurants = this.state.restaurants.map(restaurant => {
      return (
        <RestaurantTile
          key={restaurant.name}
          restaurant={restaurant}
          handleDelete={this.handleRestaurantDelete}
        />
      )
    })

    let suggested = this.state.suggested.map(restaurant => {
      return (
        <SuggestedTile
          key={restaurant.name}
          restaurant={restaurant}
        />
      )
    })

    return (
      <div>
        <h1>{this.state.trip.name}</h1>
        <p>{this.state.trip.city}, {this.state.trip.state}</p>

        <h3>Your Restaurants</h3>
        {restaurants}

        <h3>Suggested Restaurants</h3>
        {suggested}

        <div className="callout">
          <p>Search by name/type of food</p>
          <form>
            <label>Name/Food Type
              <input
                name='search'
                type='text'
                value=''
              />
            </label>

            <div className="button-group">
              <input className="button" type="submit" value="Submit" />
            </div>
          </form>
        </div>

        <Link to="/trips">Home</Link><br/>
        <Link onClick={this.handleTripDelete}>Delete Trip</Link>
      </div>
    )
  }
}

export default TripShowContainer;
