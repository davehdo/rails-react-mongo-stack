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
      suggested: []
    }
    this.getRestaurants = this.getRestaurants.bind(this);
    this.getSuggested = this.getSuggested.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.addSuggested = this.addSuggested.bind(this);
    this.handleRestaurantDelete = this.handleRestaurantDelete.bind(this);
    this.handleTripDelete = this.handleTripDelete.bind(this);
  }

  componentDidMount() {
    this.getRestaurants()
    this.getSuggested()
  }

  getRestaurants() {
    let tripId = this.props.params.id
    fetch(`/api/v1/trips/${tripId}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        trip: body.trip,
        restaurants: body.restaurants
      })
    })
  }

  getSuggested() {
    let payload = {
      tripId: this.props.params.id
    }
    fetch(`/yelp`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    )
    .then(response => response.json())
    .then(responseData => {
      this.setState({ suggested: responseData.businesses })
    })
  }

  handleSearch(payload) {
  //   let payload = {
  //     location: {
  //       city: "Boston",
  //       state: "MA"
  //     }
  //   }
  //
  //   fetch(`/yelp?state=${}&city=${}`,
  //     {
  //       method: 'GET',
  //       credentials: 'same-origin',
  //       headers: { 'Content-Type': 'application/json' }
  //     }
  //   )
  //   .then(response => response.json())
  //   .then(responseData => {
  //     console.log(responseData)
  //     this.setState({ yelpData: responseData })
  //   })
  }

  addSuggested(payload) {
    console.log("in add suggested!")
    payload.tripId = this.props.params.id,
    console.log(payload)

    // fetch(`/api/v1/restaurants`, {
    //     method: 'POST',
    //     credentials: 'same-origin',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(payload)
    //   }
    // )
    // .then(response => response.json())
    // .then(responseData => {
    //   console.log(responseData)
    //   // this.setState({ restaurants: [...this.state.restaurants, responseData] })
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
      this.props.router.push('/') //redirect to index
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
          key={restaurant.id}
          name={restaurant.name}
          image={restaurant.image_url}
          rating={restaurant.rating}
          addressTop={restaurant.location.display_address[0]}
          addressBottom={restaurant.location.display_address[1]}
          addSuggested={this.addSuggested}
          restaurant={restaurant}
        />
      )
    })

    return (
      <div>
        <h1>{this.state.trip.name}</h1>
        <p>{this.state.trip.city}, {this.state.trip.state}</p>

        {restaurants}

        <div id="suggested-container">
          <div className="row">
            {suggested}
          </div>
        </div>

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

        <Link to="/">Back</Link><br/>
        <Link onClick={this.handleTripDelete}>Delete Trip</Link>
      </div>
    )
  }
}

export default TripShowContainer;
